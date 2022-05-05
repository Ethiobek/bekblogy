import { Favorite, MoreVert, Share } from "@mui/icons-material";

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
export const Post = () => {
  return (
    <Box p={2} flex={4} bgcolor={"background.default"}>
      <Card sx={{ maxWidth: 600 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="technology">
              B
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Bereket Zergaw"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/834949/pexels-photo-834949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Virtual Reality"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Virtual Reality (VR) is a computer-generated environment with scenes
            and objects that appear to be real, making the user feel they are
            immersed in their surroundings. This environment is perceived
            through a device known as a Virtual Reality headset or helmet.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
