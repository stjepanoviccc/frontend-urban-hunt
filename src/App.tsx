import axios from "axios";
import { API_ENDPOINTS } from "./config/apiConfig";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TopBarProvider } from "./context/TopBarContext";
import RootLayout from "./view/RootLayout";
import ErrorPage from "./view/ErrorPage";
import Home from "./view/Home";
import Dashboard from "./view/Dashboard";
import AboutUs from "./view/AboutUs";
import EditRealEstate from "./components/Dashboard/Agent/EditRealEstate";
import Notification from "./components/Notification";

const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'edit-real-estate', element: <EditRealEstate /> }
    ],
  }])

  const getAgentIdFromToken = async () => {
    const response: any = await axios.get(API_ENDPOINTS.FIND_AGENT_ID_FROM_TOKEN, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  };

  const [notification, setNotification] = useState<boolean>(false);
  const [notificationData, setNotificationData] = useState<any>(null);

  const handleCloseNotification = () => {
    setNotification(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let agentId:any = undefined;
        if(localStorage.getItem("role") === "AGENT") {
          agentId = await getAgentIdFromToken();
          console.log(agentId);
        }

        const socket = new WebSocket('ws://localhost:8080');

        socket.addEventListener('open', (event) => {
          console.log('WebSocket connection opened.');
          if (localStorage.getItem("role") === "AGENT") {
            const type = "AGENT";
            socket.send(JSON.stringify({ agentId: agentId, type }));
          }
        });

        socket.addEventListener('message', (event) => {
          console.log('Received message from server:', event.data);
          const message = JSON.parse(event.data);
          setNotification(true);
          setNotificationData(message.notification);
        });

        socket.addEventListener('close', (event) => {
          console.log('WebSocket connection closed.', event);
        });

      } catch (error) {
        console.error('Error fetching agent ID:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AuthProvider>
      <TopBarProvider>
        <RouterProvider router={router} />
        {notification && (
          <Notification message={notificationData} closeNotificationModal={handleCloseNotification}></Notification>
        )}
      </TopBarProvider>
    </AuthProvider>
  );
}

export default App;