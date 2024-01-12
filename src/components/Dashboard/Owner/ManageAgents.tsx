import Table from "../../UI/TableUI/Table"
import TableItem from "../../UI/TableUI/TableItem"

const ManageAgents: React.FC = () => {
  const tableData = [["1", "Anderson", "anderson@gmail.com", "Agent"], ["2", "Komika", "komika@gmail.com", "Agent"], ["3", "Zeko", "zeko123@gmail.com", "Agent"]]

  return (
    <Table headings={["User ID", "Username", "Email", "Role", "Action"]}>
      {tableData.map((tableItem, index) => (
        <TableItem key={index} data={tableItem}>
          <td className="px-6 py-4">
            <form>
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