import axios from "axios";
import { API_ENDPOINTS } from "./config/apiConfig";
import { useEffect, useState, useRef } from "react";
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
import FormWrap from "./components/UI/FormUI/FormWrap";
import StarRating from "./components/UI/StarRating";

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

  const getGuestIdFromToken = async () => {
    const response: any = await axios.get(API_ENDPOINTS.FIND_GUEST_ID_FROM_TOKEN, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  };

  const messageRef = useRef<any>(null);
  const [formData, setFormData] = useState<any>({
    rating: 1,
    agentId: -1,
    message: "",
    realEstateId: -1
  })

  const handleRatingChange = (newRating: number) => {
    formData.rating = newRating;
  };

  const ratingAgentSubmit = async (event: any) => {
    event.preventDefault();

    const newFormData = {
      rating: formData.rating,
      agentId: formData.agentId,
      message: messageRef.current.value,
      realEstateId: formData.realEstateId
    };

    try {
      await axios.post(API_ENDPOINTS.RATE_AGENT, newFormData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
    } catch (error) {
      console.log(error);
    }
    
   handleCloseNotification();
  };

  const handleCloseNotification = () => {
    setNotification(false);
  }

  const [notification, setNotification] = useState<boolean>(false);
  const [notificationData, setNotificationData] = useState<any>(
    <form onSubmit={ratingAgentSubmit}>
      <input type="hidden" value="1" />
      <FormWrap label="Message">
        <input
          type="text"
          name="message"
          className="my-input"
          ref={messageRef}
        />
      </FormWrap>
      <FormWrap label="Rating" className="mt-4">
        <StarRating totalStar={5} initialRating={formData.rating} onChange={handleRatingChange} />
      </FormWrap>
      <button type="submit" className="my-primary-btn mt-4">Send</button>
    </form>
  );

  useEffect(() => {

    const fetchData = async () => {
      try {
        let id: any = undefined;
        if (localStorage.getItem("role") === "AGENT") {
          id = await getAgentIdFromToken();
        } else if (localStorage.getItem("role") === "GUEST") {
          id = await getGuestIdFromToken();
        }

        const socket = new WebSocket('ws://localhost:8080');

        socket.addEventListener('open', (event) => {
          console.log('WebSocket connection opened.');
          if (localStorage.getItem("role") === "AGENT") {
            const type = "AGENT";
            socket.send(JSON.stringify({ id: id, type }))
          };
          if (localStorage.getItem("role") === "GUEST") {
            const type = "GUEST";
            socket.send(JSON.stringify({ id: id, type }));
          }
        });

        socket.addEventListener('message', (event) => {
          console.log('Received message from server:', event.data);
          const message = JSON.parse(event.data);
          
          setNotification(true);
          setFormData({
            rating: formData.rating,
            agentId: message.agentId,
            message: formData.message
          });

          switch (message.type) {
            case "MESSAGE":
              setNotificationData(message.notification);
              break;
            case "RATING":
              formData.realEstateId = message.realEstateId
              formData.agentId = message.agentId

              setNotificationData(
                <form onSubmit={ratingAgentSubmit}>
                  <input type="hidden" value="1" />
                  <FormWrap label="Message">
                    <input
                      type="text"
                      name="message"
                      className="my-input"
                      ref={messageRef}
                    />
                  </FormWrap>
                  <FormWrap label="Rating" className="mt-4">
                    <StarRating totalStar={5} initialRating={formData.rating} onChange={handleRatingChange} />
                  </FormWrap>
                  <button type="submit" className="my-primary-btn mt-4">Send</button>
                </form>)
          }
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
          <Notification closeNotificationModal={handleCloseNotification}>
            {notificationData}
          </Notification>
        )}
      </TopBarProvider>
    </AuthProvider>
  );
}

export default App;