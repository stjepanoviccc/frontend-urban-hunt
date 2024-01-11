import Modal from "../UI/Modal"
import CloseButtonIcon from "../UI/Icons/CloseButtonIcon";

interface Props {
  closeLoginModal: () => void;
  openRegistrationModal: () => void;
}

const LoginModal: React.FC<Props> = ({ closeLoginModal, openRegistrationModal }) => {
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
          <div className="flex flex-col gap-y-2">
            <label className="block">Name</label>
            <input type="text" className="py-1 border-b-[1px] border-primary w-full transition duration-200 focus:px-2 focus:outline-none focus:border-b-2 focus:shadow-md" />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="block">Password:</label>
            <input type="password" className="py-1 border-b-[1px] border-primary w-full transition duration-300 focus:px-2 focus:outline-none focus:border-b-2 focus:shadow-md"/>
          </div>
          <div className="flex flex-row justify-between pt-4">
            <button type="submit" className="text-white bg-primary border-2 border-primary rounded-lg py-2 px-6 transition duration-300 hover:text-primary hover:bg-white">Submit</button>
            <div className="flex flex-col text-right">
              <p>You don't have account?</p>
              <button type="button" onClick={openRegistrationModal} className="hover:coursor-pointer underline">Register Now!</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default LoginModal
