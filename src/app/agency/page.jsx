"use client";

import React from 'react';
import styles from './footer.module.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Image from 'next/image';
import Results from '../../assets/results.svg';
import Clients from '../../assets/clients.svg';
import Data from '../../assets/data.svg';

const Agency = () => {
    return(
        <div className={styles.agency}>
            <Navbar />
            <h1>About Teepremium Agency</h1>
            <h2>Our Story</h2>
            <p>Teepremium Agency was founded in 2020 by Toluwalope Ejioye, a seasoned digital marketer with over a decade of experience. <br />
                Starting as a small consultancy, we've grown into a full-service agency, helping businesses of all sizes achieve their marketing <br />
                goals through innovative strategies and data-driven insights.</p>
            <h2>Our Mission</h2>
            <p>Our mission is to empower businesses with effective digital marketing solutions that drive growth and maximize ROI. We are <br /> 
            committed to delivering exceptional results through transparency, collaboration, and a client-centric approach.</p>
            <h2>Our Values</h2>
            <div className="values">
                <div className="valueCard">
                    <Image src={Results} alt="" className={valueIcon} />
                    <h3>Results Driven</h3>
                    <p>We are committed to delivering measurable results and maximizing ROI for our clients.</p>
                </div>
                <div className="valueCard">
                    <Image src={Clients} alt="" className={valueIcon} />
                    <h3>Clients Focused</h3>
                    <p>We prioritize our clients' needs and work closely with them to achieve their goals.</p>
                </div>
                <div className="valueCard">
                    <Image src={Data} alt="" className={valueIcon} />
                    <h3>Data Driven</h3>
                    <p>We leverage data and analytics to inform our strategies and optimize performance.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Agency;