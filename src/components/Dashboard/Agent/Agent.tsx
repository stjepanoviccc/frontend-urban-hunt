import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { API_ENDPOINTS } from "../../../config/apiConfig";
import Wrap from "../../UI/Wrap";
import AddNewRealEstate from "./AddNewRealEstate";
import ManageRealEstates from "../AgentAndAdministrator/ManageRealEstates";
import Calendar from "../AgentAndOwner/Calendar";

const Agent = () => {
  const { user } = useAuth();
  const [agency, setAgency] = useState<any | null>(null);
  const [manageRealEstatesIsActive, setManageRealEstatesIsActive] = useState(true);
  const [addNewRealEstateIsActive, setAddNewRealEstateIsActive] = useState(false);
  const [seeCalendarIsActive, setSeeCalendarIsActive] = useState(false);

  const toggleManageRealEstates = () => {
    setManageRealEstatesIsActive(true);
    setAddNewRealEstateIsActive(false);
    setSeeCalendarIsActive(false);
  }

  const toggleAddNewRealEstate = () => {
    setAddNewRealEstateIsActive(true);
    setManageRealEstatesIsActive(false);
    setSeeCalendarIsActive(false);
  }

  const toggleCalendar = () => {
    setSeeCalendarIsActive(true);
    setManageRealEstatesIsActive(false);
    setAddNewRealEstateIsActive(false);
  }

  useEffect(() => {
    const findAgency = async () => {
      const response = await axios.get(API_ENDPOINTS.FIND_AGENCY_BY_AGENT_ID, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`,
          'Content-Type': 'application/json'
        },
      });
      const agency = response.data;
      setAgency(agency);
    }

    findAgency();
  }, [])

  return (
    <Wrap>
      <div className="pt-12 text-center">
        <h1 className="text-4xl">Agent Dashboard</h1>
      </div>
      <div className="pt-12 text-center flex flex-col justify-between xl:flex-row items-center gap-y-4 pb-4">
        { /** <button className={`text-lg max-w-[200px] ${manageRealEstatesIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageRealEstates}>Manage Real Estates</button> **/}
        <button className={`text-lg max-w-[200px] ${manageRealEstatesIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageRealEstates}>Manage Real Estates</button>
        <button className={`text-lg max-w-[200px] ${seeCalendarIsActive ? "my-link-active" : "my-link"}`} onClick={toggleCalendar}>Calendar</button>
        <button className={`text-lg max-w-[200px] ${addNewRealEstateIsActive ? "my-link-active" : "my-link"}`} onClick={toggleAddNewRealEstate}>Add New Real Estate</button>
      </div>
      <div className="pt-12">
        { /** manageRealEstatesIsActive && <ManageRealEstates agencyId={agency?.id} /> **/}
        {addNewRealEstateIsActive && <AddNewRealEstate agencyId={agency?.id} />}
        {seeCalendarIsActive && <Calendar agencyId={agency?.id} />}
        {manageRealEstatesIsActive && user?.role == "AGENT" && (
          <ManageRealEstates />
        )}
      </div>
    </Wrap>
  )
}

export default Agent
