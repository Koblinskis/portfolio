import { red, blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#657d22',
    },
    secondary: {
      main: '#922728',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: blue[200],
    },
  },
});

export default theme;