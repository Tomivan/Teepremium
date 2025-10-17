"use client";

import React, { useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './footer.module.css';


const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    },[])

    return(
        <div className={styles.footer}>
            <section className={styles.footerTop}>
                <Link href='/' className={styles.link}>Home</Link>
                <Link href='/services' className={styles.link}>Services</Link>
                <Link href='/resources' className={styles.link}>Resources</Link>
                <Link href='/case-studies' className={styles.link}>Case Studies</Link>
                <Link href='/contact-us' className={styles.link}>Contact</Link>
            </section>
            <section className={styles.footerBottom}>
                <div className={styles.socials}></div>
                <p>© {currentYear} Teepremium Agency. All rights reserved.</p>
            </section>
        </div>
    )
}

export default Footer;