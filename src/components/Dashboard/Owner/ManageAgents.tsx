import axios from "axios"
import { useState, useEffect } from "react"
import { useAuth } from "../../../context/AuthContext"
import { API_ENDPOINTS, API_FIND_AGENTS_BY_AGENCY_ID_PATH  } from "../../../config/apiConfig"
import Table from "../../UI/TableUI/Table"
import UserTableItem from "../../UI/TableUI/UserTableItem"
import Agent from "../../../model/Agent"

interface Props {
  agencyId: number;
}

const ManageAgents: React.FC<Props> = ({agencyId}) => {
  const {user} = useAuth();
  const [data, setData] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchAgents = async() => {
      const response = await axios.get(API_ENDPOINTS.FIND_AGENTS_BY_AGENCY_ID + "?agencyId=" + agencyId, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`
        },
      });
      setData(response.data);
    }

    fetchAgents();
  }, [])

  return (
    <Table headings={["User ID", "Username", "Email", "Role", "Action"]}>
      {data.map((dataItem, index) => (
        <UserTableItem key={index} data={dataItem}>
          <td className="px-6 py-4">
            <form action={API_FIND_AGENTS_BY_AGENCY_ID_PATH}>
              <input type="hidden" name="id" value={dataItem.id} />
              <button type="submit" className="font-medium text-red-200 hover:underline">Delete</button>
            </form>
          </td>
        </UserTableItem>
      ))}
    </Table>
  )
}

export default ManageAgents;