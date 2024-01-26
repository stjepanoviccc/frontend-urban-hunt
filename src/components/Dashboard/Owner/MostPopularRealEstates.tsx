import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { API_ENDPOINTS } from "../../../config/apiConfig";
import Table from "../../UI/TableUI/Table"
import MostPopularRealEstatesTableItem from "../../UI/TableUI/MostPopularRealEstateTableItem";
import RealEstate from "../../../model/RealEstate";

interface Props {
  agencyId: number;
}

const MostPopularRealEstates: React.FC<Props> = ({ agencyId }) => {
  const { user } = useAuth();
  const [data, setData] = useState<RealEstate[]>([]);

  useEffect(() => {
    const fetchAgents = async () => {
      const response = await axios.get(API_ENDPOINTS.FIND_MOST_POPULAR_REAL_ESTATES_BY_AGENCY_ID + "?agencyId=" + agencyId, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`
        },
      });
      setData(response.data);
      console.log(response.data);
    }

    fetchAgents();
  }, [])

  return (
    <>
      <Table headings={["MOST POPULAR", "Location", "Surface", "Price", "Sale/Rent", "Type", "Active Tours"]}>
        {data.map((dataItem, index) => (
          <MostPopularRealEstatesTableItem key={index} data={dataItem} />
        ))}
      </Table>
      {data.length == 0 && <p className="my-no-content">No content to show</p>}
    </>

  )
}

export default MostPopularRealEstates