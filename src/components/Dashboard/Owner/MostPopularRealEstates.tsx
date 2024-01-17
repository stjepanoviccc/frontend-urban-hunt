import Table from "../../UI/TableUI/Table"
import TableItem from "../../UI/TableUI/UserTableItem"

interface Props {
  agencyId: number;
}

const MostPopularRealEstates: React.FC<Props> = ({agencyId}) => {
  console.log(agencyId);
  const tableData = [["1", "Barcelona", "123m2", "50000$", "Sale", "House", "5", "150", "15"], ["2", "Madrid", "55m2", "30000$", "Sale", "Office", "4.5", "120", "5"]]

  return (
    <Table headings={["MOST POPULAR", "Location", "Surface", "Price", "Sale/Rent", "Type", "Rating", "Views", "Tours"]}>
      {tableData.map((tableItem, index) => (
        <TableItem key={index} data={tableItem} />
      ))}
    </Table>
  )
}

export default MostPopularRealEstates