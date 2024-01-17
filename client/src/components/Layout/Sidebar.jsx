import React from "react";
import "../../App.css";
import Header from "./Header";
import Footer from "./Footer";
const Sidebar = ({ children }) => {
  return (
    <div className="sidebar-sec">
      <Header />
      <main style={{ minHeight: "650px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Sidebar;
