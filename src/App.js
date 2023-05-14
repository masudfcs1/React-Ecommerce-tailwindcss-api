import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import ProductDetails from "./pages/ProductDetails.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";

function App() {
  return (
    <div className=" overflow-hidden ">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
