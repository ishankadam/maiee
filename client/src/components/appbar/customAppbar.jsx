import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/MAIEE_LOGO_without inner shadow (1).png";
import { adminSettings } from "../../common";
import { useNavigate } from "react-router-dom";
const CustomAppbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isAdmin] = useState(false);
  const navigate = useNavigate();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageChange = (pageName) => {
    navigate(`/${pageName}`);
  };
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <div
          className="toolbar-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="logo-wrapper">
            <IconButton edge="start" color="inherit" aria-label="logo">
              <img
                src={logo}
                alt="logo"
                style={{ height: "40px", marginRight: "10px" }}
                onClick={() => handlePageChange("home")}
              />
            </IconButton>
          </div>
          <div className="page-wrapper">
            <Button
              color="inherit"
              onClick={() => handlePageChange("product")}
              sx={{ color: "#33376F", fontWeight: "bold" }}
            >
              Product
            </Button>
            <Button
              color="inherit"
              onClick={() => handlePageChange("aboutus")}
              sx={{ color: "#33376F", fontWeight: "bold" }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              onClick={() => handlePageChange("contactus")}
              sx={{ color: "#33376F", fontWeight: "bold" }}
            >
              Contact Us
            </Button>

            {/* Settings option visible only for admins */}
            {isAdmin && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Maeii" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
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
              </Box>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppbar;
