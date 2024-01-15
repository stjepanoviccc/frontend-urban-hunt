import axios from "axios";
import { API_ENDPOINTS, API_REGISTER_PATH } from "../../../config/apiConfig";
import { useState, useEffect } from "react";
import FormWrap from "../../UI/FormUI/FormWrap"
import UserFormData from "../../../model/forms/UserFormData";
import Role from "../../../model/enums/Role";

const AddNewOwner: React.FC = () => {
  const [formValidity, setFormValidity] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    address: "",
    username: "",
    password: "",
    role: "OWNER" as Role
  })

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [ev.target.name]: ev.target.value,
    }));

    let isFormValid = Object.values(formData).every(value => value !== "");
    setFormValidity(isFormValid);
  };

  const submitAddNewOwner = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      axios.post(API_ENDPOINTS.REGISTER_USER, formData)
        .catch(error => {
          console.error('Error:', error.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
  }, [formData]);

  return (
    <>
      <form className="flex flex-col gap-y-6 pb-12" action={API_REGISTER_PATH} onSubmit={submitAddNewOwner}>
        <FormWrap label="Name">
          <input name="firstName" type="text" className="my-input" value={formData.firstName} onChange={handleChange} />
        </FormWrap>
        <FormWrap label="Surname">
          <input name="lastName" type="text" className="my-input" value={formData.lastName} onChange={handleChange} />
        </FormWrap>
        <FormWrap label="Email">
          <input name="email" type="text" className="my-input" value={formData.email} onChange={handleChange} />
        </FormWrap>
        <FormWrap label="Phone">
          <input name="phoneNumber" type="tel" className="my-input" value={formData.phoneNumber} onChange={handleChange} />
        </FormWrap>
        <FormWrap label="Address">
          <input name="address" type="text" className="my-input" value={formData.address} onChange={handleChange} />
        </FormWrap>
        <FormWrap label="Username">
          <input name="username" type="text" className="my-input" value={formData.username} onChange={handleChange} />
        </FormWrap>
        <FormWrap label="Password">
          <input name="password" type="password" className="my-input" value={formData.password} onChange={handleChange} />
        </FormWrap>
        <div className="flex flex-col gap-y-2">
          <button disabled={formValidity} type="submit" className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Add New Owner</button>
        </div>
      </form>
    </>
  )
}

export default AddNewOwner