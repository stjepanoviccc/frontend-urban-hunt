import { useAuth } from "../context/AuthContext"
import Administrator from "../components/Dashboard/Administrator"
import Owner from "../components/Dashboard/Owner"
import Agent from "../components/Dashboard/Agent"

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      {/* will be shown based on logged in role */}
      { user?.role == 'ADMINISTRATOR' && <Administrator /> }
      { user?.role == 'OWNER' && <Owner /> }
      { user?.role == 'AGENT' && <Agent /> }
    </>
  )
}

export default Dashboard
