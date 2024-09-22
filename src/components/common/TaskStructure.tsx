import {
  Badge,
  Box,
  Chip,
  Divider,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import TaskCard from "./TaskCard";

const TaskStructure = ({ taskHeader }: { taskHeader: string }) => {
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
      sx={{
        height: "90vh",
        width: 280,
        m: 0,
        background: "#eaeaea",
      }}
    >
      <Box
        p={2}
        display="flex"
        justifyContent="start"
        width="100%"
        alignItems="center"
        alignContent="center"
      >
        <Badge badgeContent={40} color="primary">
          <TurnedInIcon color="action" />
        </Badge>
        <Box sx={{ ml: 2, mr: 1 }}>
          <Tooltip title={taskHeader} placement="bottom-end" arrow>
            <Typography
              variant="body2"
              fontWeight="600"
              noWrap={true}
              maxWidth={150}
            >
              {taskHeader}
            </Typography>
          </Tooltip>
        </Box>
        <Chip label="3" size="small" />
      </Box>
      <Divider></Divider>
      <Box
        p={1}
        maxHeight="100%"
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <TaskCard
          sprintName="Description 123"
          issueNumber="#21"
          issueDescription="Create a AppBar"
          issuePoints="1"
          issueLables="Team UI"
        />
        <TaskCard
          sprintName="Description 321"
          issueNumber="#25"
          issueDescription="Create first Node JS file"
          issuePoints="3"
          issueLables="Team Node"
        />
        <TaskCard
          sprintName="Description 123"
          issueNumber="#24"
          issueDescription="Create a Card for Template as per Design"
          issuePoints="5"
          issueLables="Team UI"
        />
      </Box>
    </Paper>
  );
};

export default TaskStructure;
