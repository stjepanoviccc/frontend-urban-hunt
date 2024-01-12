import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
        <Navbar />
        <main className="min-h-[100vh]">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default RootLayout;