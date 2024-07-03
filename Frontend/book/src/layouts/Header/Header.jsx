import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Divider,
  ListItemIcon,
  Typography,
  styled
} from "@mui/material";

import userimg from "../../assets/images/login.png";
import logo from "../../assets/images/BOOK.webp";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  const ColoredText = styled('span')({
    color: '#cddc39', // Yellow color
  });
  
  const ColoredText2 = styled('span')({
    color: '#00bfa5', // Light blue color
  });
  

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Toolbar>
        {/* Logo on the left */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Logo" style={{ width: "60px", marginRight: "10px" ,ml:'40px' }} />
      <Typography variant="h3">
        <ColoredText>BOOK</ColoredText> <ColoredText2>PUBLISHER</ColoredText2>
      </Typography>
    </Box>

        {/* Spacer */}
        <Box flexGrow={1} />

        {/* Notifications Icon */}
        <IconButton
          aria-label="notifications"
          color="inherit"
          aria-controls="notification-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <HomeIcon />
        </IconButton>

        {/* Profile Menu */}
        <Box sx={{ width: "1px", backgroundColor: "rgba(0,0,0,0.1)", height: "25px", ml: 1 }} />
        <Button
          aria-label="profile-menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
        >
          <Avatar
            src={userimg}
            alt="User"
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem onClick={handleClose4}>My account</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose4}>
            <ListItemIcon>
              <PersonAddOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose4}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose4}>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
