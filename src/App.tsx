import React from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "./theme";
import NavBar from "./NavBar/NavBar";
import styles from "./App.module.scss";

const App = () => (
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Container className={styles.mainContainer}>
                <Outlet />
            </Container>
        </ThemeProvider>
    </>
);

export default App;
