import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from './Navbar.module.css'


export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>
                <Logo />
                <Search />
                <Button children="Give Feedback"/>
            </nav>
        </>
    )
}