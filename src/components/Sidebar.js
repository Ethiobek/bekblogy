import {
  Book,
  BorderAll,
  Computer,
  ElectricCar,
  Flight,
  Info,
  Menu,
  RestaurantMenu,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as React from "react";

export const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box sx={{ position: "fixed" }}>
        <Menu
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
          }}
        />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemText primary="Blog Posts" />
          <ListItemButton>
            <ListItemIcon>
              <BorderAll />
            </ListItemIcon>
            <ListItemText primary="All" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <RestaurantMenu />
            </ListItemIcon>
            <ListItemText primary="Foods" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="Education" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Computer />
            </ListItemIcon>
            <ListItemText primary="Technology" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ElectricCar />
            </ListItemIcon>
            <ListItemText primary="Car" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Flight />
            </ListItemIcon>
            <ListItemText primary="Airoscience" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </List>
        {/* Some conversations here */}
      </Box>
    </Box>
  );
};
