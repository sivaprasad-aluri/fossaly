import React from "react";
import TaskStructure from "./TaskStructure";
import { Box } from "@mui/material";

const MainContent = () => {
  return (
    <Box
      display="flex"
      columnGap={1}
      p={2}
      sx={{ overflowX: "auto", overflowY: "clip" }}
    >
      <TaskStructure taskHeader="Product Backlog" />
      <TaskStructure taskHeader="Sprint Backlog" />
      <TaskStructure taskHeader="Inprogress" />
      <TaskStructure taskHeader="Ready For Review" />
      <TaskStructure taskHeader="Ready For Testing " />
      <TaskStructure taskHeader="Done" />
    </Box>
  );
};

export default MainContent;
