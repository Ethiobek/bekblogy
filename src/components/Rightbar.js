import {
  Avatar,
  AvatarGroup,
  Box,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";

export const Rightbar = () => {
  return (
    <Box
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "flex", margin: "5" } }}
    >
      <Box width={300} position="fixed">
        <Typography variant="h6" fontWeight="100">
          Following
        </Typography>
        <AvatarGroup max={8}>
          <Avatar>C</Avatar>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
        <span sx={{ margin: 5 }}>Chats</span>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Rediet Solomon" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Virtual Reality"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Rediet Solomon
                  </Typography>
                  {" — I like your posts, they are alot to me…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Temesgen Beamlak" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="ETHIO-JET 444"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Temesgen Beamlak
                  </Typography>
                  {
                    " — I wish I could see more posts about airoscience from you…"
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Crstian Debebe" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Crstian Debebe
                  </Typography>
                  {
                    " — What do you think about making Ethiopian's food more international…"
                  }
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
