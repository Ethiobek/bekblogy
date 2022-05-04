import React from 'react'
import {
    Add,
    CheckBox,
    FavoriteRounded,
    PlayArrow,
    Settings,
  } from "@mui/icons-material";
import { Button, styled } from "@mui/material";

export const UnorganizedComp = () => {
    const BlackButton = styled(Button)({
        backgroundColor: "black",
        color: "white",
        margin: 5,
        "&:hover": {
          color: "black",
          backgroundColor: "gray",
        },
        "&:disabled": {
          color: "red",
          backgroundColor: "gray",
          cursor: "pointer",
        },
      });
  return (
    <div>
    <Button
      sx={{
        margin: 5,
      }}
      startIcon={<Settings />}
      color="inherit"
      variant="contained"
      size="large"
    >
      Settings
    </Button>
    <Button
      sx={{
        margin: 5,
      }}
      startIcon={<Add />}
      color="success"
      variant="contained"
      size="small"
    >
      Add Post
    </Button>
    <Typography
      sx={{
        margin: 5,
      }}
      variant="h6"
      component="h6"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt
      dicta et tempore laborum nostrum dolorem eveniet at beatae adipisci amet
      maiores soluta distinctio repellat sint exercitationem tempora, id
      itaque.
    </Typography>
    <BlackButton startIcon={<PlayArrow />}> Play Music</BlackButton>
    <BlackButton startIcon={<CheckBox />}> Vote</BlackButton>
    <BlackButton startIcon={<CheckBox />}> Vote</BlackButton>
    <Fab aria-label="like">
      <FavoriteRounded sx={{ color: "red" }} />
    </Fab>
  </div>
  )
}
