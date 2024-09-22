import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
    background: {
      default: '#f4f6f8', // Custom background color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial', // Use the Google font you installed
  },
});

export default theme;
