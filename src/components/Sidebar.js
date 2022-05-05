import {
  Book,
  BorderAll,
  Computer,
  ElectricCar,
  Flight,
  Info,
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
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed" }}>
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
              <Flight sx={{ color: "#082a45" }} />
            </ListItemIcon>
            <ListItemText primary="Airoscience" sx={{ color: "#082a45" }} />
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
