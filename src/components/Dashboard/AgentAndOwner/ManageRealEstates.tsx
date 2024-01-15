import Table from "../../UI/TableUI/Table"
import TableItem from "../../UI/TableUI/UserTableItem"

const ManageRealEstates: React.FC = () => {
  const tableData = [["1", "Barcelona", "123m2", "50000$", "Sale", "House"], ["2", "Madrid", "55m2", "30000$", "Sale", "Office"]]

  return (
    <Table headings={["Real Estate ID", "Location", "Surface", "Price", "Sale/Rent", "Type", "Action"]}>
      {tableData.map((tableItem, index) => (
        <TableItem key={index} data={tableItem}>
          <td className="px-6 py-4">
            <form>
              <input type="hidden" name="id" value="1" />
              <button type="submit" className="font-medium text-red-200 hover:underline">Edit</button>
            </form>
          </td>
        </TableItem>
      ))}
    </Table>
  )
}

export default ManageRealEstates
