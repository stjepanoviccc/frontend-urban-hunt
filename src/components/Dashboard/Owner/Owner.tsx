import axios from "axios";
import { useState, useEffect } from "react"
import { useAuth } from "../../../context/AuthContext";
import { API_ENDPOINTS } from "../../../config/apiConfig";
import Wrap from "../../UI/Wrap";
import DefineAgency from "./DefineAgency";
import ManageAgents from "./ManageAgents";
import MostPopularAgents from "./MostPopularAgents";
import AddNewAgent from "./AddNewAgent";
import ManageRealEstates from "../AgentAndAdministrator/ManageRealEstates";
import MostPopularRealEstates from "./MostPopularRealEstates";
import Calendar from "../AgentAndOwner/Calendar";


const Owner = () => {
    const { user } = useAuth();
    const [agency, setAgency] = useState<any | null>(null);
    const [manageAgentsIsActive, setManageAgentsIsActive] = useState(true);
    const [seeMostPopularAgentsIsActive, setSeeMostPopularAgentsIsActive] = useState(false);
    const [addNewAgentIsActive, setAddNewAgentIsActive] = useState(false);
    const [seeCalendarIsActive, setSeeCalendarIsActive] = useState(false);
    const [manageRealEstatesIsActive, setManageRealEstatesIsActive] = useState(false);
    const [seeMostPopularRealEstatesIsActive, setSeeMostPopularRealEstatesIsActive] = useState(false);

    const toggleDefineAgency = () => {
        window.location.href = "/dashboard";
    }

    const toggleManageAgents = () => {
        setManageAgentsIsActive(true);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeCalendarIsActive(false);
        setManageRealEstatesIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleMostPopularAgents = () => {
        setSeeMostPopularAgentsIsActive(true);
        setManageAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeCalendarIsActive(false);
        setManageRealEstatesIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);

    }

    const toggleAddNewAgent = () => {
        setAddNewAgentIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setSeeCalendarIsActive(false);
        setManageRealEstatesIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleCalendar = () => {
        setSeeCalendarIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setManageRealEstatesIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleManageRealEstates = () => {
        setManageRealEstatesIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeCalendarIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleMostPopularRealEstates = () => {
        setSeeMostPopularRealEstatesIsActive(true);
        setManageRealEstatesIsActive(false);
        setSeeCalendarIsActive(false);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
    }

    useEffect(() => {
        const findAgency = async () => {
            const response = await axios.get(API_ENDPOINTS.FIND_AGENCY, {
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
                <h1 className="text-4xl">Owner Dashboard</h1>
            </div>
            <div className="pt-12 text-center flex flex-col justify-between xl:flex-row items-center gap-y-4 pb-4">
                {agency != "" ? (
                    <>
                        <button className={`text-lg max-w-[200px] ${manageAgentsIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageAgents}>Manage Agents</button>
                        <button className={`text-lg max-w-[200px] ${seeMostPopularAgentsIsActive ? "my-link-active" : "my-link"}`} onClick={toggleMostPopularAgents}>Popular Agents</button>
                        <button className={`text-lg max-w-[200px] ${addNewAgentIsActive ? "my-link-active" : "my-link"}`} onClick={toggleAddNewAgent}>Add New Agent</button>
                        <button className={`text-lg max-w-[200px] ${manageRealEstatesIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageRealEstates}>Manage Real Estates</button>
                        <button className={`text-lg max-w-[200px] ${seeMostPopularRealEstatesIsActive ? "my-link-active" : "my-link"}`} onClick={toggleMostPopularRealEstates}>Popular Real Estates</button>
                        <button className={`text-lg max-w-[200px] ${seeCalendarIsActive ? "my-link-active" : "my-link"}`} onClick={toggleCalendar}>Calendar</button>
                    </>
                ) : (
                    <button className="my-link-active">Define Agency</button>
                )}

            </div>
            <div className="pt-12">
                {agency != "" ? (
                    <>
                        {manageAgentsIsActive && <ManageAgents agencyId={agency?.id} />}
                        {seeMostPopularAgentsIsActive && <MostPopularAgents agencyId={agency?.id} />}
                        {addNewAgentIsActive && <AddNewAgent agencyId={agency?.id} />}
                        {seeCalendarIsActive && <Calendar agencyId={agency?.id} />}
                        {manageRealEstatesIsActive && <ManageRealEstates />}
                        {seeMostPopularRealEstatesIsActive && <MostPopularRealEstates agencyId={agency?.id} />}
                    </>
                ) : (
                    <>
                        {<DefineAgency toggleAgencyVisibility={toggleDefineAgency} /> }
                    </>
                )}
            </div>
        </Wrap>
    )
}

export default Owner