import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { Add } from "./components/Add";
import { DarkMode } from "./components/DarkMode";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Sidebar2 } from "./components/Sidebar2";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} height="100%" color={"text.primary"}>
        <Navbar />
        <DarkMode mode={mode} setMode={setMode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
