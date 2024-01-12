import { useState } from "react"

const GenerateReport: React.FC = () => {
  const [isGenerated, setIsGenerated] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-4 text-center text-2xl">
        <button className="my-ghost-btn" onClick={() => setIsGenerated(true)}>Generate</button>
        {
          isGenerated && (
            <>
              <p className="mt-4">Transaction For Sale: <span className="text-green-600 font-bold">5000$</span></p>
              <p className="border-b-2 border-primary pb-4">Transaction For Rent: <span className="text-green-600 font-bold">5000$</span></p>
              <p>Total Income: <span className="text-green-600 font-bold">10000$</span></p>
            </>
          )
        }
      </div>
    </>
  )
}

export default GenerateReport
