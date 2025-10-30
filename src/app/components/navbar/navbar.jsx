"use client";

import React from 'react';
import styles from './navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Logo from '../../../assets/logo.svg';

const NavComponent = () => {
    return(
        <Navbar expand="lg" className={styles.navbar}>
            <Container className={styles.navigation}>
                <Navbar.Brand href="/"><Image src={Logo} className={styles.logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.nav}>
                <Nav>
                    <Nav.Link href="/services" className={styles.link}>Services</Nav.Link>
                    <Nav.Link href="/abous-us" className={styles.link}>About Us</Nav.Link>
                    <Nav.Link href="/case-studies" className={styles.link}>Case Studies</Nav.Link>
                    <Nav.Link href="/contact-us" className={styles.link}>Contact Us</Nav.Link>
                </Nav>
                <button className={styles.getStarted}> Get Started</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComponent;