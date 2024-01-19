import { useTopBar } from "../../../context/TopBarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
    const { messageObject, barVisibility, hide } = useTopBar();

    return (
        <div className={`${!barVisibility ? "hidden" : "flex justify-between p-4 text-white text-center w-full"}
                    ${messageObject?.status == "SUCCESS" ? "bg-blue-600" : "bg-red-600"}`}>

            <button> <FontAwesomeIcon icon={faCircleInfo} /></button>
            {barVisibility && <div>{messageObject?.text}</div>}
            <button className="font-bold" onClick={hide}>X</button>
        </div>
    );
};

export default TopBar;