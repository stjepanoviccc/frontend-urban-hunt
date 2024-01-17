import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { API_ENDPOINTS } from "../../../config/apiConfig";
import Table from "../../UI/TableUI/Table"
import UserTableItem from "../../UI/TableUI/UserTableItem"
import Agent from "../../../model/Agent";

interface Props {
  agencyId: number;
}

const MostPopularAgents: React.FC<Props> = ({agencyId}) => {
  const {user} = useAuth();
  const [data, setData] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchPopularAgents = async() => {
      const response = await axios.get(API_ENDPOINTS.FIND_MOST_POPULAR_AGENTS_BY_AGENCY_ID_PATH + "?agencyId=" + agencyId, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`
        },
      });
      setData(response.data);
    };

    fetchPopularAgents();
  })

  return (
    <Table headings={["MOST POPULAR", "Username", "Rating", "Views", "Tours"]}>
      {data.map((dataItem, index) => (
        <UserTableItem key={index} data={dataItem} />
      ))}
    </Table>
  )
}

export default MostPopularAgents
