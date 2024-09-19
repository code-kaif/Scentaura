import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Perfume from "./pages/Perfume";
import Bodywash from "./pages/Bodywash";
import AttarOodh from "./pages/AttarOodh";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/bodywash" element={<Bodywash />} />
          <Route path="/attar" element={<AttarOodh />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
