"use client";

import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assets/logo.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return(
        <div className={styles.navbar}>
            <Link href="/" onClick={closeMenu}>
                <Image src={Logo} className={styles.logo} alt="Logo" />
            </Link>
            
            <button 
                className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${styles.navigation} ${isMenuOpen ? styles.navigationActive : ''}`}>
                <Link href='/services' className={styles.link} onClick={closeMenu}>Services</Link>
                <Link href='/about-us' className={styles.link} onClick={closeMenu}>About Us</Link>
                <Link href='/case-studies' className={styles.link} onClick={closeMenu}>Case Studies</Link>
                <Link href='/contact-us' className={styles.link} onClick={closeMenu}>Contact</Link>
                <Link href='/contact-us' className={styles.link} onClick={closeMenu}><button className={styles.getStarted}>Get Started</button></Link>
            </div>

            {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
        </div>
    )
}

export default Navbar;