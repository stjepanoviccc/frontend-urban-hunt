import Wrap from "../Wrap";

const Navbar: React.FC = () => {
    const logoSrc = import.meta.env.BASE_URL + "logo.png";

    return (
        <header>
            <Wrap>
                <nav className="flex flex-row justify-between items-center gap-x-24 p-4">
                    <img className="w-24" src={logoSrc} alt="logo" />
                    <ul className="flex flex-row gap-x-12">
                        <li>
                            <a className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Home</a>
                        </li>
                        <li>
                            <a className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Link1</a>
                        </li>
                        <li>
                            <a className="text-primary relative transition duration-300 border-b-2 border-transparent pb-2 nav-link-hover hover:cursor-pointer">Link2</a>
                        </li>
                    </ul>
                    <button className="text-white bg-primary border-2 border-primary rounded-lg py-2 px-4 transition duration-300 hover:text-primary hover:bg-white">
                        Login
                    </button>
                </nav>
            </Wrap>
        </header>
    )
}

export default Navbar;