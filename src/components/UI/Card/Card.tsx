import React from "react";

const Card: React.FC = () => {

    const imgSrc = import.meta.env.BASE_URL + "real-estates-img/test-min.jpg";

    return (
        <div className="border-2 border-primary rounded-lg relative hover:scale-105 hover:cursor-pointer transition duration-300">
            <img src={imgSrc} alt="img" className="rounded-t-md w-full"></img>
            <p className="text-lg pt-2">Location: Barcelona</p>
            <p className="text-lg">Surface: 123m2</p>
            <p className="text-lg">Price: 50000$</p>
            <p className="text-lg pb-2">Type: House</p>
            <div className="bg-primary text-white border-2 border-primary absolute bottom-0 right-0 p-3 rounded-tl-lg">
                FOR SALE
            </div>
        </div>
    )
}

export default Card;
