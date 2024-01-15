import { useState, useEffect } from "react";
import CloseButtonIcon from "../UI/Icons/CloseButtonIcon";
import Modal from "../UI/Modal";
import FormWrap from "../UI/FormUI/FormWrap";
import Role from "../../model/enums/Role";
import UserFormData from "../../model/forms/UserFormData";
import axios from "axios";
import { API_ENDPOINTS } from "../../config/apiConfig";

interface Props {
  closeRegistrationModal: () => void;
  openLoginModal: () => void;
}

const RegistrationModal: React.FC<Props> = ({ closeRegistrationModal, openLoginModal }) => {
  const [formValidity, setFormValidity] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    address: "",
    username: "",
    password: "",
    role: "GUEST" as Role
  })

  const handleChange = async(ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });

    let isFormValid = Object.values(formData).every(value => value !== "");
    setFormValidity(isFormValid);


    const res = await axios.get("http://localhost:3000/api/findAllGuests", {
      withCredentials: true, // Include this line if your server requires credentials
    });
    console.log(res);
  };

  const submitRegistration = async() => {
    try {
      /*
      const response = await axios.post(API_ENDPOINTS.REGISTER_USER, formData);
      console.log(response.data);

      closeRegistrationModal();
      openLoginModal();
      */
     const res = await axios.get(API_ENDPOINTS.FIND_ALL_GUESTS);
     console.log(res.data);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Modal>
      <div className="flex flex-col gap-y-8">
        {/* head */}
        <div className="flex items-center justify-between pb-6 border-b-2 rounded-t dark:border-primary">
          <h3 className="text-xl font-semibold">
            Register
          </h3>
          <button type="button" onClick={closeRegistrationModal} className="end-2.5 text-primary bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <CloseButtonIcon />
          </button>
        </div>

        {/* body */}
        <form className="flex flex-col gap-y-6">
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
            <button type="submit" onClick={submitRegistration} disabled={formValidity} className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Register</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default RegistrationModal;
