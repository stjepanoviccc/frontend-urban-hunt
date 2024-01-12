import { useState } from "react"
import Wrap from "../../UI/Wrap";
import ManageAgents from "./ManageAgents";
import SeeMostPopularAgents from "./SeeMostPopularAgents";
import AddNewAgent from "./AddNewAgent";
import SeeMostPopularRealEstates from "./SeeMostPopularRealEstates";


const Owner = () => {
    const [manageAgentsIsActive, setManageAgentsIsActive] = useState(true);
    const [seeMostPopularAgentsIsActive, setSeeMostPopularAgentsIsActive] = useState(false);
    const [addNewAgentIsActive, setAddNewAgentIsActive] = useState(false);
    const [seeMostPopularRealEstatesIsActive, setSeeMostPopularRealEstatesIsActive] = useState(false);

    const toggleManageAgents = () => {
        setManageAgentsIsActive(true);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleMostPopularAgents = () => {
        setSeeMostPopularAgentsIsActive(true);
        setManageAgentsIsActive(false);
        setAddNewAgentIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleAddNewAgent = () => {
        setAddNewAgentIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setSeeMostPopularRealEstatesIsActive(false);
    }

    const toggleMostPopularRealEstates = () => {
        setSeeMostPopularRealEstatesIsActive(true);
        setManageAgentsIsActive(false);
        setSeeMostPopularAgentsIsActive(false);
        setAddNewAgentIsActive(false);
    }

    return (
        <Wrap>
            <div className="pt-12 text-center">
                <h1 className="text-4xl">Owner Dashboard</h1>
            </div>
            <div className="pt-12 text-center flex flex-col justify-between lg:flex-row items-center gap-y-4 pb-4">
                <button className={`text-lg max-w-[200px] ${manageAgentsIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageAgents}>Manage Agents</button>
                <button className={`text-lg max-w-[200px] ${seeMostPopularAgentsIsActive ? "my-link-active" : "my-link"}`} onClick={toggleMostPopularAgents}>Popular Agents</button>
                <button className={`text-lg max-w-[200px] ${addNewAgentIsActive ? "my-link-active" : "my-link"}`} onClick={toggleAddNewAgent}>Add New Agent</button>
                <button className={`text-lg max-w-[200px] ${seeMostPopularRealEstatesIsActive ? "my-link-active" : "my-link"}`} onClick={toggleMostPopularRealEstates}>Popular Real Estates</button>
            </div>
            <div className="pt-12">
                {manageAgentsIsActive && <ManageAgents />}
                {seeMostPopularAgentsIsActive && <SeeMostPopularAgents />}
                {addNewAgentIsActive && <AddNewAgent />}
                {seeMostPopularRealEstatesIsActive && <SeeMostPopularRealEstates />}
            </div>
        </Wrap>
    )
}

export default Owner