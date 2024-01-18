import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { API_ENDPOINTS } from "../../../config/apiConfig";
import Table from "../../UI/TableUI/Table"
import TableItem from "../../UI/TableUI/UserTableItem"

interface Props {
  agencyId: number;
}

const Calendar: React.FC<Props> = ({ agencyId }) => {
  const { user } = useAuth();
  const [userId, setUserId] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);

  const handleSetUserId = (id: number) => {
    setUserId({ id });
  };

  const submitCalendarAcceptRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault;

    try {
      axios.post(API_ENDPOINTS.CALENDAR_ACCEPT_REQUEST, {userId, agencyId}, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`
        },
      } );
    } catch (error) {
      console.log("Submitting accept calendar request failed: ", error);
    }
  }

  const submitCalendarDeleteRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault;

    try {
      axios.post(API_ENDPOINTS.CALENDAR_DELETE_REQUEST,{userId, agencyId}, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`
        },
      });
    } catch (error) {
      console.log("Submitting delete calendar request failed: ", error);
    }
  }

  useEffect(() => {
    const findCalendarById = async () => {
      let endpoint = "";
      if (user?.role == "OWNER") {
        endpoint = API_ENDPOINTS.FIND_CALENDAR_BY_OWNER_ID;
      }
      else if (user?.role == "AGENT") {
        endpoint = API_ENDPOINTS.FIND_CALENDAR_BY_AGENT_ID;
      }

      try {
        const response = await axios.get(endpoint, {
          headers: {
            'Authorization': `Bearer ${user?.accessToken}`
          },
        })

        setData(response.data);
      } catch (error) {
        console.log("Error fetching calendar by id: " + error);
      }
    };

    findCalendarById();
  }, []);

  return (
    <Table headings={["Tour ID", "Real Estate ID", "User ID", "Tour Date", "Action"]}>
      {data.map((dataItem, index) => (
        <TableItem key={index} data={dataItem}>
          <td className="px-6 py-4">
            <form onSubmit={submitCalendarAcceptRequest}>
              <input type="hidden" name="id" value="1" />
              <button onClick={() => handleSetUserId(dataItem.id)} type="submit" className="font-medium text-green-200 hover:underline mr-4">Accept</button>
            </form>
            <form onSubmit={submitCalendarDeleteRequest}>
              <input type="hidden" name="id" value="1" />
              <button onClick={() => handleSetUserId(dataItem.id)} type="submit" className="font-medium text-red-200 hover:underline">Delete</button>
            </form>
          </td>
        </TableItem>
      ))}
    </Table>
  )
}

export default Calendar;