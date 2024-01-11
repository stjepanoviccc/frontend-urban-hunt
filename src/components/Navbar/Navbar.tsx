import { useState } from "react";
import Wrap from "../UI/Wrap";
import LoginModal from "../LoginModal";

const Navbar: React.FC = () => {
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isRegistrationModalActive, setIsRegistrationModalActive] = useState(false);

    const toggleLoginModal = () => {
        setIsLoginModalActive(prev => !prev);
    };

    const toggleRegistrationModal = () => {
        setIsRegistrationModalActive(prev => !prev);
    }

    const logoSrc = import.meta.env.BASE_URL + "logo.png";

    return (
        <>
            {isLoginModalActive && <LoginModal closeLoginModal={toggleLoginModal} openRegistrationModal={toggleRegistrationModal} />}

            <header>
                <Wrap>
                    <nav className="flex flex-row justify-between items-center gap-x-24 p-4">
                        <img className="w-24" src={logoSrc} alt="logo" />
                        <ul className="flex flex-row gap-x-12">
                            <li>
                                <a href="/" className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Home</a>
                            </li>
                            <li>
                                <a className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Link1</a>
                            </li>
                            <li>
                                <a className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Link2</a>
                            </li>
                        </ul>
                        <button className="text-white bg-primary border-2 border-primary rounded-lg py-2 px-6 transition duration-300 hover:text-primary hover:bg-white" onClick={toggleLoginModal}>
                            Login
                        </button>
                    </nav>
                </Wrap>
            </header>
        </>

    )
}

export default Navbar;