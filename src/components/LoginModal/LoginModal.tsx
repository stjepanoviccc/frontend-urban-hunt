import CloseButtonIcon from "../UI/Icons/CloseButtonIcon";
import Modal from "../UI/Modal"
import FormWrap from "../UI/FormUI/FormWrap";

interface Props {
  closeLoginModal: () => void;
  openRegistrationModal: () => void;
}

const LoginModal: React.FC<Props> = ({ closeLoginModal, openRegistrationModal }) => {

  // it will later be submitting form from service
  const submitLogin = () => {
    closeLoginModal();
    openRegistrationModal();
  };

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
        <form className="flex flex-col gap-y-6">
          <FormWrap label="Username">
            <input name="username" type="text" className="my-input" />
          </FormWrap>
          <FormWrap label="Password">
            <input name="password" type="password" className="my-input" />
          </FormWrap>
          <div className="flex flex-col sm:flex-row justify-between gap-y-4 pt-4">
            <button type="submit" className="my-primary-btn">Submit</button>
            <div className="flex flex-col text-center">
              <p>You don't have account?</p>
              <button type="button" onClick={submitLogin} className="hover:coursor-pointer underline">Register Now!</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default LoginModal
