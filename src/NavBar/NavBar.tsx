import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Link,
    Container,
    Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.scss";
import FlyoutPanelMobile from "../FlyoutPanelMobile/FlyoutPanelMobile";

const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
];
const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <AppBar>
            <Container maxWidth="lg" disableGutters>
                <Toolbar className={styles.toolBar}>
                    <Hidden mdUp>
                        <IconButton
                            className={styles.iconButton}
                            color="primary"
                            edge="start"
                            onClick={() => setIsDrawerOpen(true)}
                            size="large"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <Logo className={styles.logo} />

                    <Hidden mdDown>
                        {navLinks.map((link) => (
                            <Link
                                className={styles.link}
                                key={link.name}
                                variant="button"
                                underline="none"
                                component={RouterLink}
                                to={link.to}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </Hidden>
                </Toolbar>
            </Container>
            <FlyoutPanelMobile
                isOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                onDrawerClose={onDrawerClose}
                navLinks={navLinks}
            />
        </AppBar>
    );
};

export default NavBar;
