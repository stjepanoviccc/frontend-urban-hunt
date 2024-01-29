import CloseButtonIcon from "../UI/Icons/CloseButtonIcon";
import Modal from "../UI/Modal"

interface Props {
  closeNotificationModal: () => void;
  children: any
}

const Notification: React.FC<Props> = ({ closeNotificationModal, children }) => {

  return (
    <Modal>
      <div className="flex flex-col gap-y-8">
        {/* head */}
        <div className="flex items-center justify-between pb-6 border-b-2 rounded-t dark:border-primary">
          <h3 className="text-xl font-semibold">
            Notification
          </h3>
          <button type="button" onClick={closeNotificationModal} className="end-2.5 text-primary bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <CloseButtonIcon />
          </button>
        </div>

        {/* body */}
        {children}
      </div>
    </Modal>
  )
}

export default Notification;
