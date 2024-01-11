import { ReactNode, useEffect } from "react";
import Backdrop from "../Backdrop";

interface Props {
    children: ReactNode;
}

const Modal: React.FC<Props> = props => {
    // making body unscrollable when mounted
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "visible";
        }
    })

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <Backdrop />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-lg w-2/3 lg:w-[500px]">
                {props.children}
            </div>
        </div>
    )
}

export default Modal;
