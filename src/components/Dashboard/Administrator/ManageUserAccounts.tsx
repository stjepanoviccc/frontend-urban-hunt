import axios from "axios"
import { useState, useEffect } from "react"
import { API_ENDPOINTS, API_DEACTIVATE_USER_PATH, API_ACTIVATE_USER_PATH } from "../../../config/apiConfig"
import User from "../../../model/User"
import Table from "../../UI/TableUI/Table"
import UserTableItem from "../../UI/TableUI/UserTableItem"

const ManageUserAccounts: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [user, setUser] = useState<{ id: number; role: string } | null>(null);

  const handleSetUser = (id: number, role: string) => {
     setUser({ id, role });
  };

  const submitDeactivateUser = (event: React.FormEvent<HTMLFormElement>) => { 
    event?.preventDefault();
    try {
      axios.post(API_ENDPOINTS.DEACTIVATE_USER, user);
    } catch(error) {
      console.log(error);
    } 
  };

  const submitActivateUser = (event: React.FormEvent<HTMLFormElement>) => { 
    event?.preventDefault();
    try {
      axios.post(API_ENDPOINTS.ACTIVATE_USER, user);
    } catch(error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.FIND_ALL_USERS);
        setData(response.data);
      } catch(error) {
        console.log("Error: ", error)
      }
    }
    
    fetchData();

  }, []);

  return (
    <Table headings={["User ID", "Username", "Email", "Role", "Action"]}>
      {data.map((dataItem, index) => (
        <UserTableItem key={index} data={dataItem}>
          <td className="px-6 py-4">
            <form className="flex flex-col gap-y-6" action={dataItem.active ? API_DEACTIVATE_USER_PATH : API_ACTIVATE_USER_PATH} onSubmit={dataItem.active ? submitDeactivateUser : submitActivateUser}>
            {dataItem.active ? (
            <button onClick={() => handleSetUser(dataItem.id, dataItem.role)} type="submit" className="font-medium text-red-200 hover:underline">Deactivate</button>
          ) : (
            <button onClick={() => handleSetUser(dataItem.id, dataItem.role)} type="submit" className="font-medium text-green-200 hover:underline">Activate</button>
          )}
            </form>
          </td>
        </UserTableItem>
      ))}
    </Table>
  )
}

export default ManageUserAccounts;