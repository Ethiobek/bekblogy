import {
  Book,
  BorderAll,
  Computer,
  Drafts,
  ElectricCar,
  Flight,
  Info,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

export const Sidebar = () => {
  return (
    <Box
      bgcolor="whitesmoke"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Blog Post Category
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <BorderAll />
          </ListItemIcon>
          <ListItemText primary="All" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
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
    </Box>
  );
};
