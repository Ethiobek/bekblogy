import { Chair, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const NavbarRight = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const DisplaySmall = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          BEKBLOG
        </Typography>
        <Chair sx={{ display: { xs: "block", sm: "none" } }}></Chair>
        <Search>
          <InputBase placeholder="Search"></InputBase>
        </Search>
        <NavbarRight>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={(e) => setOpen(true)} />
        </NavbarRight>
        <DisplaySmall onClick={(e) => setOpen(true)}>
          <Avatar />
          <span>Bereket Zergaw</span>
        </DisplaySmall>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};
