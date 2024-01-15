import axios from "axios"
import { useState, useEffect } from "react"
import { API_ENDPOINTS } from "../../../config/apiConfig"
import User from "../../../model/User"
import Table from "../../UI/TableUI/Table"
import UserTableItem from "../../UI/TableUI/UserTableItem"

const ManageUserAccounts: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

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
            <form>
              <input type="hidden" name="id" value="1" />
              <button type="submit" className="font-medium text-red-200 hover:underline">Deactivate</button>
            </form>
          </td>
        </UserTableItem>
      ))}
    </Table>
  )
}

export default ManageUserAccounts;