import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoIcon from "@mui/icons-material/Info";
import ArticleIcon from "@mui/icons-material/Article";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      title: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      title: "Profile",
      icon: <AccountCircleIcon />,
      link: "/profile",
    },
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      link: "/dashboard",
    },
    {
      title: "Cart",
      icon: <LocalMallIcon />,
      link: "/cart",
    },
    {
      title: "Help",
      icon: <InfoIcon />,
      link: "/help",
    },
    {
      title: "Login",
      icon: <LoginIcon />,
      link: "/login",
    },
  ];
  return (
    <div className="sidebar-sec">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <ArticleIcon onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className="side-link"
            activeclassName="active"
            style={{ textDecoration: "none" }}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{
                display: isOpen ? "block" : "none",
              }}
              className="title-sec"
            >
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ width: "100%", padding: "20px" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
