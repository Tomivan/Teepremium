"use client";

import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assets/logo.svg';

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <Link href="/"><Image src={Logo} className={styles.logo} alt="Logo" /></Link>
            <div className={styles.navigation}>
                <Link href='/services' className={styles.link}>Services</Link>
                <Link href='/agency' className={styles.link}>Resources</Link>
                <Link href='/case-studies' className={styles.link}>Case Studies</Link>
                <Link href='/contact-us' className={styles.link}>Contact</Link>
                <button className={styles.getStarted}> Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;