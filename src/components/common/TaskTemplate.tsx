import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

const TaskTemplate = ({
  taskHeader,
  taskContent,
  taskPoints,
}: {
  taskHeader: string;
  taskContent: string;
  taskPoints: string;
}) => {
  /* 
    @Main wrapper: style should work!

    @user-icon:

    @sprint #number: #21
    @task title: "to work on something"
    @task points: 3     
*/

  return (
    <Paper
      elevation={2}
      sx={{ minHeight: "75vh", width: 275, p: 1, m: 0, background: "#ccc" }}
    >
      <Box py={1}>
        <Typography variant="h6">{taskHeader}</Typography>
      </Box>
    </Paper>
  );
};

export default TaskTemplate;
