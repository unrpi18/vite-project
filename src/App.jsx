import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveLayout from "./components/Layout.jsx";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        error: {
            main: '#f44336',
        },
        text: {
            secondary: '#757575',
        },
    },
});

function App()  {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveLayout />
        </ThemeProvider>
    )

}


export default App
