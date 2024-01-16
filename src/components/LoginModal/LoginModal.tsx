import axios from "axios";
import { API_ENDPOINTS, API_LOGIN_PATH } from "../../config/apiConfig";
import { useState, useEffect, ReactHTMLElement } from "react";
import CloseButtonIcon from "../UI/Icons/CloseButtonIcon";
import Modal from "../UI/Modal"
import FormWrap from "../UI/FormUI/FormWrap";

interface Props {
  closeLoginModal: () => void;
  openRegistrationModal: () => void;
}

const LoginModal: React.FC<Props> = ({ closeLoginModal, openRegistrationModal }) => {
  const [error, setError] = useState(false);
  const [formValidity, setFormValidity] = useState(false);
  const [formData, setFormData] = useState<any>({
    username: "",
    password: ""
  })

  const handleChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    { error == true && setError(false) }
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });

    let isFormValid = Object.values(formData).every(value => value !== "");
    setFormValidity(isFormValid);
  };

  const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, formData)
      const userTokenState = response.data;
      localStorage.setItem('accessToken', userTokenState.accessToken);
      localStorage.setItem('expiresIn', userTokenState.expiresIn);
      localStorage.setItem('role', userTokenState.role);
      closeLoginModal();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const toggleLogin = () => {
    closeLoginModal();
    openRegistrationModal();
  }

  useEffect(() => {
    
  }, [formData]);

  return (
    <Modal>
      <div className="flex flex-col gap-y-8">
        {/* head */}
        <div className="flex items-center justify-between pb-6 border-b-2 rounded-t dark:border-primary">
          <h3 className="text-xl font-semibold">
            Sign In
          </h3>
          <button type="button" onClick={closeLoginModal} className="end-2.5 text-primary bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <CloseButtonIcon />
          </button>
        </div>

        {/* body */}
        <form className="flex flex-col gap-y-6" action={API_LOGIN_PATH} onSubmit={submitLogin}>
          <FormWrap label="Username">
            <input name="username" type="text" className="my-input" value={formData.username} onChange={handleChange} />
          </FormWrap>
          <FormWrap label="Password">
            <input name="password" type="password" className="my-input" value={formData.password} onChange={handleChange} />
          </FormWrap>
          {error && <p className="text-red-600">Login failed, please try again.</p>}
          <div className="flex flex-col sm:flex-row justify-between gap-y-4 pt-4">
            <button type="submit" className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Submit</button>
            <div className="flex flex-col text-center">
              <p>You don't have account?</p>
              <button type="button" className="hover:coursor-pointer underline" onClick={toggleLogin}>Register Now!</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default LoginModal
