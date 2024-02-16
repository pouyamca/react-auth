import { createTheme } from "@mui/material";
import { blue, green, purple } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: blue[500],
        },
    },
});

export default theme