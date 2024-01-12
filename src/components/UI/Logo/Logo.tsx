interface Props {
    className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
    const logoSrc = import.meta.env.BASE_URL + "logo.png";

    return (
        <a href="/">
            <img src={logoSrc} alt="logo" className={`w-24 ` + className} />
        </a>

    )
}

export default Logo;