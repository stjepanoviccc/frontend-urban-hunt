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
  const [data, setData] = useState<any[]>([]);

  const submitCalendarAcceptRequest = (event: React.FormEvent<HTMLFormElement>, tourId: number) => {
    event?.preventDefault;
    console.log(tourId);
    try {
      axios.post(API_ENDPOINTS.CALENDAR_ACCEPT_REQUEST + "?tourId=" + tourId, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`
        },
      } );
    } catch (error) {
      console.log("Submitting accept calendar request failed: ", error);
    }
  }

  const submitCalendarDeleteRequest = (event: React.FormEvent<HTMLFormElement>, tourId: number) => {
    event?.preventDefault;
    console.log(tourId);
    try {
      axios.post(API_ENDPOINTS.CALENDAR_DELETE_REQUEST  + "?tourId=" + tourId, {
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

      try {
        let endpoint = API_ENDPOINTS.FIND_CALENDAR;
        // check is owner if yes then proceed with agency id, if not then proceed with agent id from token.
        {user?.role == "OWNER" ? endpoint = endpoint + "ByAgency" + "?agencyId=" + agencyId : ""}
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
            <form onSubmit={(event) => submitCalendarAcceptRequest(event, dataItem.id)}>
              <button type="submit" className="font-medium text-green-200 hover:underline mr-4">Accept</button>
            </form>
            <form onClick={(event) => submitCalendarDeleteRequest(event, dataItem.id)}>
              <button  type="submit" className="font-medium text-red-200 hover:underline">Delete</button>
            </form>
          </td>
        </TableItem>
      ))}

    </Table>
  )
}

export default Calendar;