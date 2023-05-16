import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className=" overflow-hidden ">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/product/:id" element={<ProductDetails />} />{" "}
        </Routes>{" "}
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
