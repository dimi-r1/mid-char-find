import { createTheme, responsiveFontSizes } from "@mui/material";
import {} from "@mui/material/colors";

const theme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: "#FE3D67",
                light: "#d4c29f",
                dark: "#8d7d5f",
            },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: { backgroundColor: "#ffffff" },
                },
            },
        },
    })
);

theme.typography.h1 = {
    fontSize: "1.8rem",
    fontWeight: "500",
    color: "#872B95",
    [theme.breakpoints.up("md")]: {
        fontSize: "2.9rem",
    },
};

theme.typography.h2 = {
    fontSize: "1.4rem",
    fontWeight: "400",
    color: "#FE3D67",
    [theme.breakpoints.up("md")]: {
        fontSize: "1.8rem",
    },
};

export default theme;
