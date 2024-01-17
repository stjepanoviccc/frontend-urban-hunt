import axios from "axios";
import { API_ENDPOINTS, API_REGISTER_PATH } from "../../config/apiConfig";
import { useState, useEffect } from "react";
import CloseButtonIcon from "../UI/Icons/CloseButtonIcon";
import Modal from "../UI/Modal";
import FormWrap from "../UI/FormUI/FormWrap";
import Role from "../../model/enums/Role";
import UserFormData from "../../model/forms/UserFormData";

interface Props {
  closeRegistrationModal: () => void;
  openLoginModal: () => void;
}

const RegistrationModal: React.FC<Props> = ({ closeRegistrationModal, openLoginModal }) => {
  const [error, setError] = useState(false);
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

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [ev.target.name]: ev.target.value,
    }));

    let isFormValid = Object.values(formData).every(value => value !== "");
    setFormValidity(isFormValid);
  };

  const submitRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!formValidity) {
      return;
    }

    try {
      axios.post(API_ENDPOINTS.REGISTER_USER, formData)
        .then(() => {
          closeRegistrationModal();
          openLoginModal();
        })
        .catch(error => {
          console.error('Error:', error.message);
        });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {

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
        <form className="flex flex-col gap-y-6" action={API_REGISTER_PATH} onSubmit={submitRegistration}>
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
          {error && <p className="text-red-600">Registration failed, please try again.</p>}
          <div className="flex flex-col gap-y-2">
            <button type="submit" className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Register</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default RegistrationModal;
