import React, { useState } from "react";

import {
  AppBar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";

import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setSlider } from "../../redux/features/userSlice"

import "./CommonHeader.scss";
import { RootState } from "../../redux/store";

const CommonHeader = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { slider } = useSelector(
    (state: RootState) => state.user
  );
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar className="siteHeader">
        <Box className="siteHeader__logo">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(setSlider(!slider))}
            className="siteHeader__menuIcon"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="siteHeader__logoText">
             Admin <span> Panel React</span>
          </Typography>
        </Box>
        <div className="siteHeader__rightButtons">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </AppBar>
    </React.Fragment>
  );
};

export default CommonHeader;
