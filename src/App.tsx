import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./view/RootLayout";
import ErrorPage from "./view/ErrorPage";
import Home from "./view/Home";
import Dashboard from "./view/Dashboard";

const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'about-us', element: <p>About us</p> },
      { path: 'contact', element: <p>contact</p> },
    ],
  }])

  return (
    <RouterProvider router={router} />
  );
}

export default App;