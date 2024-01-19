import { useState } from "react";
import Wrap from "../../UI/Wrap";
import ManageUserAccounts from "./ManageUserAccounts";
import ManageRealEstates from "../AgentAndAdministrator/ManageRealEstates";
import AddNewOwner from "./AddNewOwner";
import GenerateReport from "./GenerateReport";

const Administrator = () => {
    const [manageUserAccountsIsActive, setManageUserAccountsIsActive] = useState(true);
    const [manageRealEstateIsActive, setManageRealEstateIsActive] = useState(false);
    const [addNewOwnerIsActive, setAddNewOwnerIsActive] = useState(false);
    const [generateReportIsActive, setGenerateReportIsActive] = useState(false);

    const toggleManageUserAccounts = () => {
        setManageUserAccountsIsActive(true);
        setManageRealEstateIsActive(false);
        setAddNewOwnerIsActive(false);
        setGenerateReportIsActive(false);
    }

    const toggleManageRealEstate = () => {
        setManageUserAccountsIsActive(false);
        setManageRealEstateIsActive(true);
        setAddNewOwnerIsActive(false);
        setGenerateReportIsActive(false);
    }

    const toggleAddNewOwner = () => {
        setManageUserAccountsIsActive(false);
        setManageRealEstateIsActive(false);
        setAddNewOwnerIsActive(true);
        setGenerateReportIsActive(false);
    }

    const toggleGenerateReport = () => {
        setManageUserAccountsIsActive(false);
        setManageRealEstateIsActive(false);
        setAddNewOwnerIsActive(false);
        setGenerateReportIsActive(true);
    }

    return (
        <Wrap>
            <div className="pt-12 text-center">
                <h1 className="text-4xl">Admin Dashboard</h1>
            </div>
            <div className="pt-12 text-center flex flex-col justify-between lg:flex-row items-center gap-y-4 pb-4">
                <button className={`text-lg max-w-[200px] ${manageUserAccountsIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageUserAccounts}>Manage User Accounts</button>
                <button className={`text-lg max-w-[200px] ${manageRealEstateIsActive ? "my-link-active" : "my-link"}`} onClick={toggleManageRealEstate}>Manage Real Estate</button>
                <button className={`text-lg max-w-[200px] ${addNewOwnerIsActive ? "my-link-active" : "my-link"}`} onClick={toggleAddNewOwner}>Add New Owner</button>
                <button className={`text-lg max-w-[200px] ${generateReportIsActive ? "my-link-active" : "my-link"}`} onClick={toggleGenerateReport}>Generate Report</button>
            </div>
            <div className="pt-12">
                {manageUserAccountsIsActive && <ManageUserAccounts />}
                {manageRealEstateIsActive && <ManageRealEstates />}
                {addNewOwnerIsActive && <AddNewOwner />}
                {generateReportIsActive && <GenerateReport />}
            </div>
        </Wrap>
    )
}

export default Administrator
