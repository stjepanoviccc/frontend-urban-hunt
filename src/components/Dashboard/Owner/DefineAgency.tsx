import axios from "axios";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useAuth } from "../../../context/AuthContext";
import { API_ENDPOINTS, API_CREATE_AGENCY_PATH } from "../../../config/apiConfig";
import FormWrap from "../../UI/FormUI/FormWrap"
import AgencyInitialize from "../../../model/forms/AgencyInitialize";

const DefineAgency: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  const [formValidity, setFormValidity] = useState(false);
  const [ownerId, setOwnerId] = useState<number>(-999);
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
    if (!formValidity) {
      return;
    }

    try {
      axios.post(API_ENDPOINTS.CREATE_AGENCY, formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchOwnerId = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.FIND_OWNER_BY_ID, {
          headers: {
            'Authorization': `Bearer ${user?.accessToken}`
          },
        });

        setOwnerId(response.data.id);
        if (inputRef.current) {
          setFormData(prevFormData => ({
            ...prevFormData,
            ownerId
          }));
        }
      } catch (error) {
        console.error('Error fetching owner ID:', error);
      }
    };

    fetchOwnerId();
  }, [ownerId]);

  useEffect(() => {

  }, [formData]);

  return (
    <>
      <form className="flex flex-col gap-y-6 pb-12" action={API_CREATE_AGENCY_PATH} onSubmit={submitAddNewAgency}>
        <FormWrap label="Name">
          <input ref={inputRef} name="name" type="text" className="my-input" value={formData.name} onChange={handleChange} />
        </FormWrap>
        <div className="flex flex-col gap-y-2">
          <button type="submit" className={`${formValidity ? 'my-primary-btn' : 'my-disabled-btn'}`}>Define Agency</button>
        </div>
      </form>
    </>
  )
}

export default DefineAgency;