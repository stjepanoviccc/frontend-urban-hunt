import axios from "axios"
import { useState, useEffect } from "react"
import { useAuth } from "../../../context/AuthContext"
import { API_DELETE_AGENT_PATH, API_ENDPOINTS } from "../../../config/apiConfig"
import Table from "../../UI/TableUI/Table"
import UserTableItem from "../../UI/TableUI/UserTableItem"
import Agent from "../../../model/Agent"

interface Props {
  agencyId: number;
}

const ManageAgents: React.FC<Props> = ({ agencyId }) => {
  const { user } = useAuth();
  const [agentId, setAgentId] = useState<number | null>(null);
  const [refreshAfterDelete, setRefreshAfterDelete] = useState<boolean>(false);
  const [data, setData] = useState<Agent[]>([]);

  const submitDeleteAgent = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    try {
      axios.post(
        API_ENDPOINTS.DELETE_AGENT + "?agentId=" + agentId, {},
        {
          headers: {
            'Authorization': `Bearer ${user?.accessToken}`
          },
        }
      ).then( () => setRefreshAfterDelete(prev => !prev) );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (agencyId != undefined) {
      const fetchAgents = async () => {
        const response = await axios.get(API_ENDPOINTS.FIND_AGENTS_BY_AGENCY_ID + "?agencyId=" + agencyId, {
          headers: {
            'Authorization': `Bearer ${user?.accessToken}`
          },
        });

        setData(response.data);
      }
      fetchAgents();
    }
  }, [agencyId, refreshAfterDelete])

  return (
    <Table headings={["User ID", "Username", "Email", "Role", "Action"]}>
      {data.map((dataItem, index) => (
        <UserTableItem key={index} data={dataItem}>
          <td className="px-6 py-4">
            <form action={API_DELETE_AGENT_PATH} onSubmit={submitDeleteAgent}>
              <button onClick={() => setAgentId(dataItem.id)} type="submit" className="font-medium text-red-200 hover:underline">Delete</button>
            </form>
          </td>
        </UserTableItem>
      ))}
    </Table>
  )
}

export default ManageAgents;