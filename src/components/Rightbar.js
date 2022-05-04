import { Box } from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box
      bgcolor="cyan"
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Right bar
    </Box>
  );
};
