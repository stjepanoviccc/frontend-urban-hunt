import Logo from "../UI/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"

interface Props {
    toggleNavMenu: () => void;
    isNavMenuActive: boolean;
}

const Toggler: React.FC<Props> = ({toggleNavMenu, isNavMenuActive}) => {
    return (
        <div className="flex justify-between items-center pt-4 lg:hidden">
            <Logo />
            <button onClick={toggleNavMenu} className="border-2 border-primary py-2 px-4 h-12 rounded-xl">
                {isNavMenuActive ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                
            </button>
        </div>
    )
}

export default Toggler
