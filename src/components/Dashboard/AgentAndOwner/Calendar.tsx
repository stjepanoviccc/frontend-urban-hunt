import Table from "../../UI/TableUI/Table"
import TableItem from "../../UI/TableUI/UserTableItem"

interface Props {
  agencyId: number;
}

const Calendar: React.FC<Props> = ({agencyId}) => {
  console.log(agencyId);
  const tableData = [["1", "1", "1", "12.1.2024 12:15"]]

  return (
    <Table headings={["Tour ID", "Real Estate ID", "User ID", "Tour Date", "Action"]}>
      {tableData.map((tableItem, index) => (
        <TableItem key={index} data={tableItem}>
          <td className="px-6 py-4">
            <form>
              <input type="hidden" name="id" value="1" />
              <button type="submit" className="font-medium text-green-200 hover:underline mr-4">Accept</button>
              <button type="submit" className="font-medium text-red-200 hover:underline">Delete</button>
            </form>
          </td>
        </TableItem>
      ))}
    </Table>
  )
}

export default Calendar
