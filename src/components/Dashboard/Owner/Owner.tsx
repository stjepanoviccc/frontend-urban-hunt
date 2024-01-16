import { useState } from "react"
import Wrap from "../../UI/Wrap";
import ManageAgents from "./ManageAgents";
import MostPopularAgents from "./MostPopularAgents";
import AddNewAgent from "./AddNewAgent";
import ManageRealEstates from "../AgentAndOwner/ManageRealEstates";
import MostPopularRealEstates from "./MostPopularRealEstates";
import AddNewRealEstate from "../AgentAndOwner/AddNewRealEstate";
import Calendar from "../AgentAndOwner/Calendar";


const Owner = () => {
    const [manageAgentsIsActive, setManageAgentsIsActive] = useState(true);
    const [seeMostPopularAgentsIsActive, setSeeMostPopularAgentsIsActive] = useState(false);
    const [addNewAgentIsActive, setAddNewAgentIsActive] = useState(false);
    const [seeCalendarIsActive, setSeeCalendarIsActive] = useState(false);
    const [manageRealEstatesIsActive, setManageRealEstatesIsActive] = useState(false);
    const [seeMostPopularRealEstatesIsActive, setSeeMostPopularRealEstatesIsActive] = useState(false);
    const [addNewRealEstateIsActive, setAddNewRealEstateIsActive] = useState(false);


    const toggleManageAgents = () => {
        setManageAgentsIsActive(true);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeCalendarIsActive(false);
        setManageRealEstatesIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
        setAddNewRealEstateIsActive(false);
    }

    const toggleMostPopularAgents = () => {
        setSeeMostPopularAgentsIsActive(true);
        setManageAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeCalendarIsActive(false);
        setManageRealEstatesIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
        setAddNewRealEstateIsActive(false);
    }

    const toggleAddNewAgent = () => {
        setAddNewAgentIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setSeeCalendarIsActive(false);
        setManageRealEstatesIsActive(false);
        setAddNewRealEstateIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleCalendar = () => {
        setSeeCalendarIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setManageRealEstatesIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
        setAddNewRealEstateIsActive(false);
    }

    const toggleManageRealEstates = () => {
        setManageRealEstatesIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeCalendarIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
        setAddNewRealEstateIsActive(false);
    }

    const toggleAddNewRealEstate = () => {
        setAddNewRealEstateIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeCalendarIsActive(false);
        setManageRealEstatesIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleMostPopularRealEstates = () => {
        setSeeMostPopularRealEstatesIsActive(true);
        setManageRealEstatesIsActive(false);
        setAddNewRealEstateIsActive(false);
        setSeeCalendarIsActive(false);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
    }


    return (
        <Wrap>
            <div className="pt-12 text-center">
                <h1 className="text-4xl">Owner Dashboard</h1>
            </div>
            <div className="pt-12 text-center flex flex-col justify-between xl:flex-row items-center gap-y-4 pb-4">
                <button>Define Agency</button>
                <button className={`text-lg max-w-[200px] ${manageAgentsIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageAgents}>Manage Agents</button>
                <button className={`text-lg max-w-[200px] ${seeMostPopularAgentsIsActive ? "my-link-active" : "my-link"}`} onClick={toggleMostPopularAgents}>Popular Agents</button>
                <button className={`text-lg max-w-[200px] ${addNewAgentIsActive ? "my-link-active" : "my-link"}`} onClick={toggleAddNewAgent}>Add New Agent</button>
                <button className={`text-lg max-w-[200px] ${manageRealEstatesIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageRealEstates}>Manage Real Estates</button>
                <button className={`text-lg max-w-[200px] ${seeMostPopularRealEstatesIsActive ? "my-link-active" : "my-link"}`} onClick={toggleMostPopularRealEstates}>Popular Real Estates</button>
                <button className={`text-lg max-w-[200px] ${addNewRealEstateIsActive ? "my-link-active" : "my-link"}`} onClick={toggleAddNewRealEstate}>Add New Real Estate</button>
                <button className={`text-lg max-w-[200px] ${seeCalendarIsActive ? "my-link-active" : "my-link"}`} onClick={toggleCalendar}>Calendar</button>
            </div>
            <div className="pt-12">
                {manageAgentsIsActive && <ManageAgents />}
                {seeMostPopularAgentsIsActive && <MostPopularAgents />}
                {addNewAgentIsActive && <AddNewAgent />}
                {seeCalendarIsActive && <Calendar />}
                {manageRealEstatesIsActive && <ManageRealEstates />}
                {seeMostPopularRealEstatesIsActive && <MostPopularRealEstates />}
                {addNewRealEstateIsActive && <AddNewRealEstate />}
            </div>
        </Wrap>
    )
}

export default Owner