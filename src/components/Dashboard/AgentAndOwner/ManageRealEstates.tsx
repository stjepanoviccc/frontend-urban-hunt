import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { API_ENDPOINTS } from "../../../config/apiConfig";
import Table from "../../UI/TableUI/Table"
import RealEstateTableItem from "../../UI/TableUI/RealEstateTableItem";
import RealEstate from "../../../model/RealEstate";

interface Props {
  agencyId: number;
}

const ManageRealEstates: React.FC<Props> = ({agencyId}) => {
  const {user} = useAuth();
  const [data, setData] = useState<RealEstate[]>([]);

  useEffect(() => {
    const fetchRealEstates = async() => {
      const response = await axios.get(API_ENDPOINTS.FIND_REAL_ESTATES_BY_AGENCY_ID + "?agencyId=" + agencyId, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`
        },
      });
      setData(response.data);
    }

    fetchRealEstates();
  }, []);

  return (
    <Table headings={["Real Estate ID", "Location", "Surface", "Price", "Sale/Rent", "Type", "Action"]}>
      {data.map((dataItem, index) => (
        <RealEstateTableItem key={index} data={dataItem}>
          <td className="px-6 py-4">
            <form>
              <input type="hidden" name="id" value="1" />
              <button type="submit" className="font-medium text-red-200 hover:underline">Edit</button>
            </form>
          </td>
        </RealEstateTableItem>
      ))}
    </Table>
  )
}

export default ManageRealEstates