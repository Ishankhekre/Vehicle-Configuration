import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import logo from "../Content/logo3.png";

const Header = ({ scrollToSection }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("authToken");

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const handleNavClick = (section) => {
    if (window.location.pathname !== "/") {
      sessionStorage.setItem("scrollToSection", section);
      navigate("/");
    } else if (scrollToSection) {
      scrollToSection(section);
    }
    setOpen(false);
  };
const handleOrderClick = () =>{
  navigate("/OrdersPage");
};
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("hasSeenSnackbar");
    navigate("/LoginPage");
  };

  return (
    <>
      <AppBar position="fixed" className="bg-primary" color="#223747">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo and Brand Name */}
          <Box onClick={(e) => { e.preventDefault(); handleNavClick("home"); }} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
            <Typography variant="h6" component="div">Vconfig</Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: "20px" }}>
            <a className="text-white text-decoration-none" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}>Home</a>
            <a className="text-white text-decoration-none" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}>About</a>
            {token && (
              <a className="text-white text-decoration-none" onClick={handleOrderClick}>Orders</a>
            )}
            <a className="text-white text-decoration-none" onClick={(e) => { e.preventDefault(); handleNavClick("services"); }}>Services</a>
            <a className="text-white text-decoration-none" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>Contact</a>

            {/* Logout Button (Only when logged in) */}
            {token && (
              <IconButton color="inherit" onClick={handleLogout} aria-label="logout">
                <LogoutIcon />
              </IconButton>
            )}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", lg: "none" } }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List className="w-75">
          <ListItem button onClick={() => handleNavClick("home")}><ListItemText primary="Home" /></ListItem>
          <ListItem button onClick={() => handleNavClick("about")}><ListItemText primary="About" /></ListItem>
          {token && (
            <ListItem button onClick={() => handleNavClick("orders")}><ListItemText primary="Orders" /></ListItem>
          )}
          <ListItem button onClick={() => handleNavClick("services")}><ListItemText primary="Services" /></ListItem>
          <ListItem button onClick={() => handleNavClick("contact")}><ListItemText primary="Contact" /></ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
