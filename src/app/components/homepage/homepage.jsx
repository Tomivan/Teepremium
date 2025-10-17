"use client";

import React from 'react';
import styles from './homepage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Background from '../../../assets/background.svg';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Homepage = () => {
    return(
        <div className={styles.homepage}>
            <Navbar />
            <div className={styles.background}>
                <Image src={Background} alt="Background" className={styles.backgroundImage} />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>Boost Your Business with <br /> Expert Digital Marketing</h1>
                    <p>We provide tailored digital marketing solutions to help your business grow <br /> and succeed in the competitive online landscape.</p>
                    <Link href='/contact-us'><button className={styles.consultation}>Get a Free Consulation</button></Link>
                </div>
            </div>
            <section className={styles.content}>
                <h2>About Us</h2>
                <p>Teepremium Agency is a leading digital marketing agency dedicated to helping businesses achieve their online goals. With a team of experienced professionals, we<br/> 
                  offer a comprehensive suite of services, including SEO, PPC, social media marketing, and content creation. Our data-driven approach ensures that every strategy is <br /> 
                  tailored to your specific needs, maximizing your ROI and driving sustainable growth.</p>
            </section>
            <section className={styles.nextLevel}>
                <h2>Ready To Take Your Business <br /> to the Next Level?</h2>
                <p>Contact us today for a free consultation and discover how MarketBoost can <br /> 
                   help you achieve your digital marketing objectives.</p>
            </section>
            <Footer />
        </div>
    )
}

export default Homepage;