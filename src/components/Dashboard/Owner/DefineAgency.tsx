import axios from "axios";
import { API_ENDPOINTS, API_CREATE_AGENCY_PATH} from "../../../config/apiConfig";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import FormWrap from "../../UI/FormUI/FormWrap"
import AgencyInitialize from "../../../model/forms/AgencyInitialize";

const DefineAgency: React.FC = () => {
  const { user } = useAuth();
  const [formValidity, setFormValidity] = useState(false);
  const [ownerId, setOwnerId] = useState<any>(null);
  const [formData, setFormData] = useState<AgencyInitialize>({
    name: "",
    ownerId: ownerId
  })

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [ev.target.name]: ev.target.value,
    }));

    let isFormValid = Object.values(formData).every(value => value !== "");
    setFormValidity(isFormValid);
  };

  const submitAddNewAgency = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      axios.post(API_ENDPOINTS.CREATE_AGENCY, formData)
        .catch(error => {
          console.error('Error:', error.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchOwnerId = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.FIND_OWNER_BY_USERNAME, {
          params: {
            username: user?.username,
          }
        });
        setOwnerId(response.data.id); 
      } catch (error) {
        console.error('Error fetching owner ID:', error);
      }
    };

    fetchOwnerId();
  }, []); 

  useEffect(() => {

  }, [formData]);

  return (
    <>
    <form className="flex flex-col gap-y-6 pb-12" action={API_CREATE_AGENCY_PATH} onSubmit={submitAddNewAgency}>
      <FormWrap label="Name">
        <input name="name" type="text" className="my-input" value={formData.name} onChange={handleChange} />
      </FormWrap>
      <div className="flex flex-col gap-y-2">
        <button disabled={formValidity} type="submit" className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Define Agency</button>
      </div>
    </form>
    </>
  )
}

export default DefineAgency;