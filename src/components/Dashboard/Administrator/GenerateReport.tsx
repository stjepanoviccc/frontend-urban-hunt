import axios from "axios";
import { useState } from "react"
import { useAuth } from "../../../context/AuthContext";
import { API_ENDPOINTS } from "../../../config/apiConfig";

const GenerateReport: React.FC = () => {
  const { user } = useAuth();
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [soldPrice, setSoldPrice] = useState<number>(0);
  const [rentedPrice, setRentedPrice] = useState<number>(0);

  const fetchTransactions = async () => {
    setIsGenerated(true);
    try {
      const response = await axios.get(API_ENDPOINTS.GENERATE_REPORT, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`
        },
      });
        setRentedPrice(response.data.rentedPrice);
        setSoldPrice(response.data.soldPrice);
        setTotalPrice(response.data.totalPrice);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-4 text-center text-2xl">
        <button className="my-ghost-btn" onClick={() => fetchTransactions()}>Generate</button>
        {
          isGenerated && (
            <>
              <p className="mt-4">Transaction For Sale: <span className="text-green-600 font-bold">{soldPrice != null ? soldPrice : 0}$</span></p>
              <p className="border-b-2 border-primary pb-4">Transaction For Rent: <span className="text-green-600 font-bold">{rentedPrice != null ? rentedPrice : 0}$</span></p>
              <p>Total Income: <span className="text-green-600 font-bold">{totalPrice != null ? totalPrice : 0}$</span></p>
            </>
          )
        }
      </div>
    </>
  )
}

export default GenerateReport
