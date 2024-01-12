import FormWrap from "../UI/FormUI/FormWrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Card: React.FC = () => {

    const imgSrc = import.meta.env.BASE_URL + "real-estates-img/test-min.jpg";

    return (
        <div className="border-2 border-primary rounded-lg relative hover:scale-105 transition duration-300">
            <img src={imgSrc} alt="img" className="rounded-t-md w-full border-b-2 border-primary"></img>
            <div className="bg-red-600 text-white absolute top-0 right-0 p-3 rounded-tr-md border-l-2 border-b-2 border-primary rounded-bl-lg">
                FOR SALE
            </div>
            <p className="text-lg pt-2">Location: Barcelona</p>
            <p className="text-lg">Surface: 123m2</p>
            <p className="text-lg">Price: 50000$</p>
            <p className="text-lg pb-2">Type: House</p>
            <p className="text-lg font-bold pb-2 border-t-2 border-primary pt-2">Schedule A Tour?</p>
            <form>
                <div className="flex justify-around">
                    <FormWrap label="Start date">
                        <input type="date" className="border-[1px] border-primary rounded-lg p-2 w-36" />
                    </FormWrap>
                    <FormWrap label="End date">
                        <input type="date" className="border-[1px] border-primary rounded-lg p-2 ml-2 w-36" />
                    </FormWrap>
                </div>
                <button type="submit" className="my-ghost-btn my-4">Send</button>
            </form>
            <div className="border-t-2 border-primary py-2 flex justify-around">
                <button className="border-2 border-primary p-3 rounded-full">
                    <FontAwesomeIcon icon={faThumbsUp} className="pr-2" />LIKE
                </button>
                <button className="border-2 border-primary p-3 rounded-full">
                    <FontAwesomeIcon icon={faThumbsDown} className="pr-2" />DISS
                </button>
            </div>
        </div>
    )
}

export default Card;
