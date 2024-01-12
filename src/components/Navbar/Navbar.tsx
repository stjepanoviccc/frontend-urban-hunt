import { useState } from "react";
import { Link } from "react-router-dom";
import Wrap from "../UI/Wrap";
import LoginModal from "../LoginModal";
import Toggler from "./Toggler";
import Logo from "../UI/Logo";
import RegistrationModal from "../RegistrationModal";

const Navbar: React.FC = () => {
    const [isNavMenuActive, setIsNavMenuActive] = useState(window.innerWidth < 1024 ? false : true);
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isRegistrationModalActive, setIsRegistrationModalActive] = useState(false);

    const toggleNavMenu = () => {
        setIsNavMenuActive(prev => !prev);
    };

    const toggleLoginModal = () => {
        setIsLoginModalActive(prev => !prev);
    };

    const toggleRegistrationModal = () => {
        setIsRegistrationModalActive(prev => !prev);
    }

    return (
        <>
            {isLoginModalActive && <LoginModal closeLoginModal={toggleLoginModal} openRegistrationModal={toggleRegistrationModal} />}
            {isRegistrationModalActive && <RegistrationModal closeRegistrationModal={toggleRegistrationModal} openLoginModal={toggleLoginModal} />}

            <header className="border-b-2 border-primary overflow-hidden">
                <Wrap>
                    <Toggler toggleNavMenu={toggleNavMenu} isNavMenuActive={isNavMenuActive} />
                    <nav className={`${isNavMenuActive ? 'translate-x-0 h-full' : 'translate-x-[120%] h-0'} text-center transform transition-transform ease-in-out flex flex-col 
                        lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-x-24 gap-y-4 py-4`}>
                        <Logo className="hidden lg:block" />
                        <ul className="flex gap-y-4 flex-col lg:flex-row lg:gap-x-12">
                            <li>
                                <Link to="/" className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Homepage</Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/about-us" className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Contact</Link>
                            </li>
                        </ul>
                        <button className="my-primary-btn" onClick={toggleLoginModal}>
                            Login
                        </button>
                    </nav>
                </Wrap>
            </header>
        </>

    )
}

export default Navbar;