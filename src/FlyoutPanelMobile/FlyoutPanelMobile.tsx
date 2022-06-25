import React from "react";
import {
    IconButton,
    SwipeableDrawer,
    Divider,
    List,
    ListItem,
    Link,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link as RouterLink } from "react-router-dom";
import { DefaultProps } from "../types/types";
import styles from "./FlyoutPanelMobile.module.scss";
import Logo from "../Logo/Logo";

interface Props extends DefaultProps<HTMLElement> {
    isOpen: boolean;
    setIsDrawerOpen: (isOpen: boolean) => void;
    onDrawerClose: () => void;
    navLinks: { name: string; to: string }[];
}

const FlyoutPanelMobile: React.FC<Props> = ({
    isOpen,
    setIsDrawerOpen,
    onDrawerClose,
    navLinks,
}) => (
    <SwipeableDrawer
        open={isOpen}
        anchor="left"
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => onDrawerClose()}
    >
        <div className={styles.drawerHeader}>
            <IconButton onClick={() => setIsDrawerOpen(false)} size="large">
                <ChevronLeftIcon color="primary" />
            </IconButton>
            <Logo />
            <div className={styles.invisible} />
        </div>

        <Divider />
        <List>
            {navLinks.map((link) => (
                <ListItem button key={link.name}>
                    <Link
                        variant="button"
                        underline="none"
                        component={RouterLink}
                        to={link.to}
                    >
                        {link.name}
                    </Link>
                </ListItem>
            ))}
        </List>
        <Divider />
    </SwipeableDrawer>
);
export default FlyoutPanelMobile;
