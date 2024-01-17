import axios from "axios"
import { useState, useEffect } from "react"
import { API_ENDPOINTS, API_FIND_AGENT_BY_AGENCY_ID_PATH  } from "../../../config/apiConfig"
import Table from "../../UI/TableUI/Table"
import TableItem from "../../UI/TableUI/UserTableItem"
import Agent from "../../../model/Agent"

interface Props {
  agencyId: number;
}

const ManageAgents: React.FC<Props> = ({agencyId}) => {
  console.log(agencyId);
  const [agents, setAgents] = useState<Agent | null>(null);
  const tableData = [["1", "Anderson", "anderson@gmail.com", "Agent"], ["2", "Komika", "komika@gmail.com", "Agent"], ["3", "Zeko", "zeko123@gmail.com", "Agent"]]

  useEffect(() => {
    const fetchAgents = async() => {
      const response = await axios.get(API_ENDPOINTS.FIND_AGENT_BY_AGENCY_ID);
    }
  }, [])

  return (
    <Table headings={["User ID", "Username", "Email", "Role", "Action"]}>
      {tableData.map((tableItem, index) => (
        <TableItem key={index} data={tableItem}>
          <td className="px-6 py-4">
            <form action={API_FIND_AGENT_BY_AGENCY_ID_PATH}>
              <input type="hidden" name="id" value="1" />
              <button type="submit" className="font-medium text-red-200 hover:underline">Delete</button>
            </form>
          </td>
        </TableItem>
      ))}
    </Table>
  )
}

export default ManageAgents;