import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useTopBar } from "../../../context/TopBarContext";
import { API_ENDPOINTS } from "../../../config/apiConfig";
import FormWrap from "../../UI/FormUI/FormWrap"
import RealEstateFormData from "../../../model/forms/RealEstateFormData";

interface Props {
  agencyId: number;
}

const AddNewRealEstate: React.FC<Props> = ({ agencyId }) => {
  const {show} = useTopBar();
  const { user } = useAuth();
  const [error, setError] = useState(false);
  const initFiles: [] = [];
  const [formValidity, setFormValidity] = useState(false);
  const [formData, setFormData] = useState<RealEstateFormData>({
    location: "",
    surfaceArea: 0,
    price: 0,
    transactionType: "SALE",
    realEstateType: "HOUSE",
    images: [],
    agencyId: agencyId,
  })

  const handleImageChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const files = ev.target.files;
    if (files) {
      const fileNamesArray: string[] = Array.from(files).map((file) => file.name);

      setFormData((prevFormData) => ({
        ...prevFormData,
        images: fileNamesArray,
      }));
    }
  };

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

  const submitAddNewRealEstate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValidity) {
      try {
        await axios.post(API_ENDPOINTS.ADD_NEW_REAL_ESTATE, formData, {
          headers: {
            'Authorization': `Bearer ${user?.accessToken}`
          },
        })
        setFormData({
          location: "",
          surfaceArea: 0,
          price: 0,
          transactionType: "SALE",
          realEstateType: "HOUSE",
          images: initFiles,
          agencyId
        });
        show("New Real Estate Added Successfully!", "SUCCESS");
        
      } catch (error) {
        console.log("Error adding new real estate: ", error);
      }
    }
  }


  return (
    <>
      <form className="flex flex-col gap-y-6 pb-12" onSubmit={submitAddNewRealEstate}>
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
        <FormWrap label="Image">
          <input onChange={handleImageChange} name="image" type="file" className="my-input" multiple />
        </FormWrap>
        <div className="flex flex-col gap-y-2">
          <button type="submit" className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Add New Real Estate</button>
        </div>
      </form>
    </>
  )
}

export default AddNewRealEstate
