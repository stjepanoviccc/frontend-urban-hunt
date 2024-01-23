import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_ENDPOINTS } from "../../../config/apiConfig";
import RealEstateFormData from "../../../model/forms/RealEstateFormData";
import FormWrap from "../../UI/FormUI/FormWrap"
import { useTopBar } from "../../../context/TopBarContext";
import { useAuth } from "../../../context/AuthContext";
import Wrap from "../../UI/Wrap";

const EditRealEstate: React.FC = () => {
    const location = useLocation();
    const [realEstate, setRealEstate] = useState<any>(null);
    const { show } = useTopBar();
    const { user } = useAuth();
    const [error, setError] = useState(false);
    const [formValidity, setFormValidity] = useState(false);
    const [formData, setFormData] = useState<RealEstateFormData>({
        id: realEstate?.id,
        location: realEstate?.location,
        surfaceArea: realEstate?.surfaceArea,
        price: realEstate?.price,
        transactionType: realEstate?.transactionType,
        realEstateType: realEstate?.realEstateType,
        agencyId: realEstate?.agencyId,
    })

    const submitEditRealEstate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formValidity) {
            try {
                await axios.post(API_ENDPOINTS.EDIT_REAL_ESTATE, formData, {
                    headers: {
                        'Authorization': `Bearer ${user?.accessToken}`
                    },
                })
                show("Real Estate Edited Successfully!", "SUCCESS");
                window.location.href = "/dashboard";

            } catch (error) {
                console.log("Error editing real estate: ", error);
            }
        }
    }

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        { error == true && setError(false) }
        setFormData(prevFormData => ({
            ...prevFormData,
            [ev.target.name]: ev.target.value,
        }));

        let isFormValid = Object.values(formData).every(value => value !== "");
        setFormValidity(isFormValid);
    };

    const handleSelectChange = (
        ev: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        const { name, value } = ev.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    
    useEffect(() => {
        if(user != undefined) {
            const fetchData = async () => {
                try {
                    const searchParams = new URLSearchParams(location.search);
                    const id = searchParams.get("id");
                    const response = await axios.get(API_ENDPOINTS.FIND_REAL_ESTATE_BY_ID + "?id=" + id, {
                        headers: {
                            'Authorization': `Bearer ${user?.accessToken}`
                        },
                    });
                    setRealEstate(response.data);
                    setFormData({
                        id:response.data.id,
                        location:response.data.location,
                        surfaceArea:response.data.surfaceArea,
                        price:response.data.price,
                        transactionType:response.data.transactionType,
                        realEstateType:response.data.realEstateType,
                        agencyId:response.data.agencyId,
                    })
    
                } catch (error) {
                    console.log(error);
                }
            };
    
            fetchData();
        }
    }, [user]);
 

    return (
        <Wrap>
            <form className="flex flex-col gap-y-6 py-12" onSubmit={submitEditRealEstate}>
                <FormWrap label="Location">
                    <input name="location" type="text" className="my-input" value={formData.location} onChange={handleChange} />
                </FormWrap>
                <FormWrap label="Surface">
                    <input name="surfaceArea" type="number" min="1" className="my-input" value={formData.surfaceArea} onChange={handleChange} />
                </FormWrap>
                <FormWrap label="Price">
                    <input name="price" type="number" min="1" className="my-input" value={formData.price} onChange={handleChange} />
                </FormWrap>
                <FormWrap label="Transaction Type">
                    <select name="transactionType" className="my-input" value={formData.transactionType} onChange={handleSelectChange} >
                        <option value="SALE">Sale</option>
                        <option value="RENT">Rent</option>
                    </select>
                </FormWrap>
                <FormWrap label="Real Estate Type">
                    <select name="realEstateType" className="my-input" value={formData.realEstateType} onChange={handleSelectChange} >
                        <option value="HOUSE">House</option>
                        <option value="APARTMENT">Apartment</option>
                        <option value="OFFICE">Office</option>
                    </select>
                </FormWrap>
                <div className="flex flex-col gap-y-2">
                    <button type="submit" className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Edit Real Estate</button>
                </div>
            </form>
        </Wrap>
    )
}

export default EditRealEstate
