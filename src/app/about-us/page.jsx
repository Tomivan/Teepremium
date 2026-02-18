"use client";

import React from 'react';
import styles from './about-us.module.css';
import Footer from '../components/footer/footer';
import Image from 'next/image';
import About from '../../assets/about.svg';
import Results from '../../assets/results.svg';
import Clients from '../../assets/clients.svg';
import Data from '../../assets/data.svg';
import Navbar from '../components/navbar/navbar';

const Agency = () => {
    return(
        <div className={styles.aboutUs}>
            <Navbar />
            <div className={styles.aboutTop}>
                <div className={styles.aboutText}>
                    <h1>About <br /> Teepremium <br /> Agency</h1>
                    <p>Teepremium Agency was founded in 2020 by Toluwalope <br /> Ejioye, 
                        a seasoned digital marketer with vast experience <br />
                        in the digital marketing space. Starting as a small <br /> 
                        consultancy, we've grown into a full-service agency, <br /> 
                        helping businesses of all sizes achieve their marketing <br /> 
                        goals through innovative strategies and data-driven <br /> insights.
                    </p>
                </div>
                <Image src={About} alt="" className={styles.aboutUsImage} width="100%" height="auto"/>
            </div>
            <div className={styles.aboutContent}>
                <h2>Our Mission</h2>
                <p>Our mission is to empower businesses with effective digital marketing solutions that drive growth and maximize ROI. We are <br /> 
                committed to delivering exceptional results through transparency, collaboration, and a client-centric approach.</p>
                <h2>Our Values</h2>
                <div className={styles.values}>
                    <div className={styles.valueCard}>
                        <Image src={Results} alt="" className={styles.valueIcon} />
                        <h3>Results Driven</h3>
                        <p>We are committed to delivering measurable results and maximizing ROI for our clients.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <Image src={Clients} alt="" className={styles.valueIcon} />
                        <h3>Clients Focused</h3>
                        <p>We prioritize our clients' needs and work closely with them to achieve their goals.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <Image src={Data} alt="" className={styles.valueIcon} />
                        <h3>Data Driven</h3>
                        <p>We leverage data and analytics to inform our strategies and optimize performance.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Agency;