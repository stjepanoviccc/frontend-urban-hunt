import axios from "axios";
import { API_ENDPOINTS, API_REGISTER_PATH } from "../../../config/apiConfig";
import { useState, useEffect } from "react";
import FormWrap from "../../UI/FormUI/FormWrap"
import UserFormData from "../../../model/forms/UserFormData";
import Role from "../../../model/enums/Role";
import { useAuth } from "../../../context/AuthContext";

interface Props {
  agencyId: number;
}

const AddNewAgent: React.FC<Props> = ({agencyId}) => {
  const {user} = useAuth();
  const [formValidity, setFormValidity] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    address: "",
    username: "",
    password: "",
    role: "AGENT" as Role,
    agencyId: agencyId
  })

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [ev.target.name]: ev.target.value,
    }));

    let isFormValid = Object.values(formData).every(value => value !== "");
    setFormValidity(isFormValid);
  };

  const submitAddNewAgent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(formValidity) {
      try {
        axios.post(API_ENDPOINTS.CREATE_AGENT, formData, {
          headers: {
            'Authorization': `Bearer ${user?.accessToken}`
          },
        })
        .then(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: 0,
            address: "",
            username: "",
            password: "",
            role: "AGENT" as Role,
            agencyId: agencyId,
          });
        })
          .catch(error => {
            console.error('Error:', error.message);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {

  }, [formData]);

  return (
    <>
    <form className="flex flex-col gap-y-6 pb-12" action={API_REGISTER_PATH} onSubmit={submitAddNewAgent}>
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
        <button type="submit" className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Add New Agent</button>
      </div>
    </form>
    </>
  )
}

export default AddNewAgent