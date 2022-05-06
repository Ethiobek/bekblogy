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
import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
export const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get("/post");
        setPosts(request.data);
        console.log("result setted");
        return request;
      } catch (e) {
        console.log("Log Error : " + e);
      }
    }
    fetchData();
  }, [setPosts]);
  console.log(posts);
  return (
    <Box p={2} flex={4} bgcolor={"background.default"}>
      {posts.map((post) => (
        <Card key={post.id} sx={{ maxWidth: 600, marginBottom: "10px" }}>
          <CardHeader
            avatar={
              <Avatar
                src={post.profilePic}
                sx={{ bgcolor: "black" }}
                aria-label="technology"
              ></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={post.firstName + " " + post.lastName}
            subheader={
              <Moment format="MMMM Do YYYY, h:mm:ss a">{post.postDate}</Moment>
            }
          />
          <CardMedia
            component="img"
            height="20%"
            image={post.postImage}
            alt={post.postContent}
          />
          <CardContent>
            <Typography align="justify" variant="body2" color="text.secondary">
              {post.postContent}
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
      ))}
    </Box>
  );
};
