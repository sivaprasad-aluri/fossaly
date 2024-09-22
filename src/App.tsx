import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";
import TaskTemplate from "./components/common/TaskTemplate";

function App() {
  return (
    <Box p={4}>
      <Typography
        variant="h4"
        textTransform="uppercase"
        textAlign="center"
        py={3}
      >
        {" "}
        Fossaly{" "}
      </Typography>
      <TaskTemplate
        taskHeader="Product Backlog"
        taskContent="fixing the main content"
        taskPoints="3"
      />
    </Box>
  );
}

export default App;
