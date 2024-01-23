import axios from "axios"
import { useState, useEffect } from "react"
import { useAuth } from "../../../context/AuthContext"
import { Link } from "react-router-dom"
import { API_ENDPOINTS, API_REAL_ESTATE_ACTIVATE_PATH, API_REAL_ESTATE_DEACTIVATE_PATH } from "../../../config/apiConfig"
import Table from "../../UI/TableUI/Table"
import RealEstateTableItem from "../../UI/TableUI/RealEstateTableItem"
import RealEstate from "../../../model/RealEstate"
import { useTopBar } from "../../../context/TopBarContext"

const ManageRealEstates: React.FC = () => {
  const { user } = useAuth();
  const { show } = useTopBar();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [data, setData] = useState<RealEstate[]>([]);

  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  }

  const submitRealEstateDeactivate = async (id: number, event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post(API_ENDPOINTS.REAL_ESTATE_DEACTIVATE + "?id=" + id, user, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      handleRefresh();
      show("Real Estate Deactivated Sucessfully!", "SUCCESS");
    } catch (error) {
      console.log(error);
    }
  }

  const submitRealEstateActivate = async (id: number, event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      await axios.post(API_ENDPOINTS.REAL_ESTATE_ACTIVATE + "?id=" + id, user, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      handleRefresh();
      show("Real Estate Activated Sucessfully!", "SUCCESS");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchRealEstates = async () => {
      try {
        let endpoint = API_ENDPOINTS.FIND_ALL_REAL_ESTATES;
        user?.role == "OWNER" && (endpoint = API_ENDPOINTS.FIND_REAL_ESTATES_BY_OWNER_ID);
        const response = await axios.get(endpoint, {
          headers: {
            'Authorization': `Bearer ${user?.accessToken}`,
            'Content-Type': 'application/json'
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRealEstates();
  }, [user, refresh]);

  return (
    <Table headings={["Real Estate ID", "Location", "Surface", "Price", "Sale/Rent", "Type", "Action"]}>
      {data.map((dataItem, index) => (
          <RealEstateTableItem key={index} data={dataItem}>
            <td className="px-6 py-4">
              <form action={dataItem.active ?
                API_REAL_ESTATE_DEACTIVATE_PATH : API_REAL_ESTATE_ACTIVATE_PATH}
                onSubmit={dataItem.active ? (event) => submitRealEstateDeactivate(dataItem.id, event) : (event) => submitRealEstateActivate(dataItem.id, event)}>
                {dataItem.active ? (
                  <>
                    <button type="submit" className="font-medium text-red-200 hover:underline">Deactivate</button>
                    <Link to={`/edit-real-estate?id=${dataItem.id}`} className="ml-4 font-medium text-blue-200 hover:underline">Edit</Link>
                  </>
                ) : (
                  <>
                    <button type="submit" className="font-medium text-green-200 hover:underline">Activate</button>
                    <Link to={`/edit-real-estate?id=${dataItem.id}`} className="ml-4 font-medium text-blue-200 hover:underline">Edit</Link>
                  </>
                )}
              </form>
            </td>
          </RealEstateTableItem>
      ))}
    </Table>
  )
}

export default ManageRealEstates
