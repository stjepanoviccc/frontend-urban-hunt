import { useState } from "react";
import Wrap from "../../UI/Wrap";
import ManageRealEstates from "../AgentAndOwner/ManageRealEstates";
import AddNewRealEstate from "../AgentAndOwner/AddNewRealEstate";
import Calendar from "../AgentAndOwner/Calendar";

const Agent = () => {
  const [manageRealEstatesIsActive, setManageRealEstatesIsActive] = useState(false);
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

  return (
    <Wrap>
    <div className="pt-12 text-center">
        <h1 className="text-4xl">Agent Dashboard</h1>
    </div>
    <div className="pt-12 text-center flex flex-col justify-between xl:flex-row items-center gap-y-4 pb-4">
        <button className={`text-lg max-w-[200px] ${manageRealEstatesIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageRealEstates}>Manage Real Estates</button>
        <button className={`text-lg max-w-[200px] ${seeCalendarIsActive ? "my-link-active" : "my-link"}`} onClick={toggleCalendar}>Calendar</button>
        <button className={`text-lg max-w-[200px] ${addNewRealEstateIsActive ? "my-link-active" : "my-link"}`} onClick={toggleAddNewRealEstate}>Add New Real Estate</button>
    </div>
    <div className="pt-12">
        {manageRealEstatesIsActive && <ManageRealEstates />}
        {addNewRealEstateIsActive && <AddNewRealEstate />}
        {seeCalendarIsActive && <Calendar />}
    </div>
</Wrap>
  )
}

export default Agent
