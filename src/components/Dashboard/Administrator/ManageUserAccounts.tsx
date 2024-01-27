import axios from "axios"
import { useState, useEffect } from "react"
import { API_ENDPOINTS, API_DEACTIVATE_USER_PATH, API_ACTIVATE_USER_PATH } from "../../../config/apiConfig"
import User from "../../../model/User"
import Table from "../../UI/TableUI/Table"
import UserTableItem from "../../UI/TableUI/UserTableItem"
import { useTopBar } from "../../../context/TopBarContext"

const ManageUserAccounts: React.FC = () => {
  const {show} = useTopBar();
  const [data, setData] = useState<User[]>([]);
  const [refreshAfterDelete, setRefreshAfterDelete] = useState<boolean>();
  const [user, setUser] = useState<{ id: number; role: string } | null>(null);

  const handleSetUser = (id: number, role: string) => {
    setUser({ id, role });
  };

  const handleRefresh = () => {
    setRefreshAfterDelete(prev => !prev);
  };

  const submitDeactivateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post(API_ENDPOINTS.DEACTIVATE_USER, user, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      handleRefresh();
      show("User Deactivated Sucessfully!", "SUCCESS");
    } catch (error) {
      show("This user can't be deactivated.", "NOT");
      console.log(error);
    }
  };

  const submitActivateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post(API_ENDPOINTS.ACTIVATE_USER, user, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      handleRefresh();
      show("User Activated Successfully!", "SUCCESS");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await axios.get(API_ENDPOINTS.FIND_ALL_USERS, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
        setData(response.data);
      } catch (error) {
        console.log("Error: ", error)
      }
    }

    fetchData();

  }, [refreshAfterDelete]);

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