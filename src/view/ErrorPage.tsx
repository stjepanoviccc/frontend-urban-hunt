import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-primary text-white">
      <p className="text-6xl">ERROR 404</p>
      <p className="text-2xl">You can't reach this route.</p>
      <Link to="/" className="pt-4">
        <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
        Please go back to homepage.
      </Link>
    </div>
  )
}

export default ErrorPage;
