import Administrator from "../components/Dashboard/Administrator"
import Owner from "../components/Dashboard/Owner"
import Agent from "../components/Dashboard/Agent"

const Dashboard = () => {

  return (
    <>
      {/* will be shown based on logged in role */}
      <Administrator />
      <Owner /> 
      <Agent />
    </>
  )
}

export default Dashboard
