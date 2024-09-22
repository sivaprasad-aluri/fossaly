import { Avatar, Badge, Box, Chip, Divider, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const TaskCard = ({
  avatar,
  sprintName,
  issueNumber,
  issueDescription,
  issuePoints,
  issueLables,
}: {
  avatar?: string;
  sprintName: string;
  issueNumber: string;
  issueDescription: string;
  issuePoints: string;
  issueLables: string;
}) => {
  return (
    <Box sx={{ background: "#f4f6f8", borderRadius: 1 }}>
      <Box display="flex" alignContent="top" gap={1} p={1}>
        <Avatar alt="Remy Sharp" variant="square">
          <PersonIcon />
        </Avatar>
        <Box display="flex" flexDirection="column">
          <Typography variant="body2" fontWeight={600}>
            {sprintName} {issueNumber}
          </Typography>
          <Typography variant="body2">{issueDescription}</Typography>
        </Box>
      </Box>
      <Divider></Divider>
      <Box p={1} display="flex" flexWrap="wrap" gap={1}>
        {/* Points */}
        <Chip label={issuePoints} color="primary" size="small" />
        {/* Label */}
        <Chip
          label={issueLables}
          color="primary"
          size="small"
          sx={{ borderRadius: 0 }}
        />
      </Box>
    </Box>
  );
};

export default TaskCard;
