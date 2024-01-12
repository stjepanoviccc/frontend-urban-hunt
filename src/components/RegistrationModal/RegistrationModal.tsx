import CloseButtonIcon from "../UI/Icons/CloseButtonIcon";
import Modal from "../UI/Modal";
import FormWrap from "../UI/FormUI/FormWrap";

interface Props {
  closeRegistrationModal: () => void;
  openLoginModal: () => void;
}

const RegistrationModal: React.FC<Props> = ({ closeRegistrationModal, openLoginModal }) => {
  const submitRegistration = () => {
    closeRegistrationModal();
    openLoginModal();
  };

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
            <input name="name" type="text" className="my-input" />
          </FormWrap>
          <FormWrap label="Surname">
            <input name="surname" type="text" className="my-input" />
          </FormWrap>
          <FormWrap label="Email">
            <input name="email" type="text" className="my-input" />
          </FormWrap>
          <FormWrap label="Phone">
            <input name="phone" type="tel" className="my-input" />
          </FormWrap>
          <FormWrap label="Address">
            <input name="address" type="text" className="my-input" />
          </FormWrap>
          <FormWrap label="Username">
            <input name="username" type="text" className="my-input" />
          </FormWrap>
          <FormWrap label="Password">
            <input name="password" type="password" className="my-input" />
          </FormWrap>
          <input name="role" type="hidden" value="Guest" />
          <div className="flex flex-col gap-y-2">
            <button type="submit" onClick={submitRegistration} className="my-primary-btn">Register</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default RegistrationModal;
