import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFEB3B', 
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'KakaoRegular, Arial, sans-serif', 
  },
});

export default theme;
