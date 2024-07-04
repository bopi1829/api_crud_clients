import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './Pages/HomePage';

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <HomePage />;
    </ThemeProvider>
  );
}

export default App;
