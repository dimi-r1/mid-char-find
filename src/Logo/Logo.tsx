import React from "react";
import logo from "../assets/midchar.png";
import styles from "./Logo.module.scss";
import { DefaultProps } from "../types/types";

const Logo: React.FC<DefaultProps<HTMLElement>> = ({ className }) => (
    <div className={className}>
        <img src={logo} alt="logo" className={styles.img} />
    </div>
);

export default Logo;
