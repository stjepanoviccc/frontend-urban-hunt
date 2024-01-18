import { useAuth } from "../context/AuthContext"

const { user } = useAuth();

const Header = () => {

  const header = {
    headers: {
      'Authorization': `Bearer ${user?.accessToken}`
    },
  }

  return header
};

export default Header;