import Table from "../../UI/TableUI/Table"
import TableItem from "../../UI/TableUI/UserTableItem"

const MostPopularAgents: React.FC = () => {
  const tableData = [["1", "Anderson", "5", "150", "25"], ["2", "Komika", "4.9", "115", "18"], ["3", "Zeko", "4.8", "85", "9"]]

  return (
    <Table headings={["MOST POPULAR", "Username", "Rating", "Views", "Tours"]}>
      {tableData.map((tableItem, index) => (
        <TableItem key={index} data={tableItem} />
      ))}
    </Table>
  )
}

export default MostPopularAgents
