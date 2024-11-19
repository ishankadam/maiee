import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import logo from "../../assets/MAIEE_LOGO_without inner shadow (1).png";
import { useNavigate, useLocation } from "react-router-dom";
import { adminSettings } from "../../common";

const CustomAppbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isAdmin] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageChange = (pageName) => {
    navigate(`/${pageName}`);
  };

  const handleScrollToSection = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  //code added by aadarsh
  // Define links based on the current route
  const links =
    location.pathname === "/product"
      ? [
          {
            label: "Home",
            action: () => (window.location.href = window.location.origin),
          },
          { label: "Product", action: () => handlePageChange("product") },
        ]
      : [
          { label: "Product", action: () => handlePageChange("product") },
          {
            label: "About Us",
            action: () => handleScrollToSection("aboutSection"),
          },
          {
            label: "Contact Us",
            action: () => handleScrollToSection("contactSection"),
          },
        ];

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 1px 0 rgba(0, 0, 0, .16) !important",
        zIndex: 1201,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Logo */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => handlePageChange("")}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </IconButton>

          {/* Hamburger Menu Icon (visible on small screens) */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Navigation (hidden on small screens) */}
          <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
            {links.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                onClick={link.action}
                sx={{
                  color: "#33376F",
                  fontWeight: "700",
                  padding: "0 20px",
                  fontFamily: "'Roboto Serif', serif",
                  fontSize: "16px",
                }}
              >
                {link.label}
              </Button>
            ))}

            {/* Admin Settings Icon (only visible to admins) */}
            {isAdmin && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Maeii" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}
          </Box>

          {/* User Menu (Admin only) */}
          {isAdmin && (
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {adminSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          )}
        </Box>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 200 }}>
            {links.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton onClick={link.action}>
                  <ListItemText
                    primary={link.label}
                    sx={{
                      color: "#33376F",
                      fontWeight: "700",
                      padding: "0 20px",
                      fontFamily: "'Roboto Serif', serif !important",
                      fontSize: "16px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppbar;
