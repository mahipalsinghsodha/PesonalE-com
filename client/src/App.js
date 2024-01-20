import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "./App.css";
import Sidebar from "./components/Layout/Sidebar";
import Contact from "./pages/Contact/Contact";
import About from "./pages/AboutUs/About";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Sidebar>
  );
}

export default App;
