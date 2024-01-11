import Wrap from "./components/UI/Wrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Navbar />
      <Wrap>
        <div className="min-h-[100vh]">main</div>
      </Wrap>
      <Footer />
    </>
  )
}

export default App;
