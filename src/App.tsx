import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RootLayout from "./view/RootLayout";
import ErrorPage from "./view/ErrorPage";
import Home from "./view/Home";
import Dashboard from "./view/Dashboard";
import AboutUs from "./view/AboutUs";

const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'about-us', element: <AboutUs /> }
    ],
  }])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;