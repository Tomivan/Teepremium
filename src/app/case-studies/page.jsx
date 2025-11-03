"use client";

import React from 'react';
import Footer from '../components/footer/footer';
import Image from 'next/image';
import Success from '../../assets/success.svg';
import Retailer from '../../assets/retailer.svg';
import Restaurant from '../../assets/resturant.svg';
import Startup from '../../assets/startup.svg';
import styles from './case.module.css';
import Navbar from '../components/navbar/navbar';

const CaseStudies = () => {
    return(
        <div className={styles.caseStudies}>
            <Navbar />
            <div className={styles.caseTop}>
                <div className={styles.caseLeft}>
                    <h1>Our <br /> Success <br /> Stories</h1>
                    <p>Teepremium Agency began with a simple mission: to <br /> 
                    help brands grow smarter, faster, and stronger in the <br /> 
                    digital world.A full-service digital marketing agency <br /> 
                    trusted by businesses worldwide. Our success is built <br /> 
                    on one core belief: when our clients win, we win.</p>
                </div>
                <Image src={Success} alt="" className={styles.caseImage} />
            </div>
            <div className={styles.caseBottom}>
                <section className={styles.section}>
                    <div className={styles.caseLeft}>
                        <p><strong>Boosting Online Presence For a Local Retailer</strong></p>
                        <p>Increased website traffic by 150% and sales by 80% within six months through targeted SEO and social media campaigns.</p>
                        <button className={styles.view}>View Case Study</button>
                    </div>
                    <Image src={Retailer} alt="" className={styles.retailer} />
                </section>
                <section className={styles.section}>
                    <div className={styles.caseLeft}>
                        <p><strong>Revitalizing a Restaurant's Brand</strong></p>
                        <p>Transformed a struggling restaurant's image with a new website, engaging content, and local advertising, leading to a 200% increase in reservations.</p>
                        <button className={styles.view}>View Case Study</button>
                    </div>
                    <Image src={Restaurant} alt="" className={styles.retailer} />
                </section>
                <section className={styles.section}>
                    <div className={styles.caseLeft}>
                        <p><strong>Driving Growth for a Tech Startup</strong></p>
                        <p>Implemented a comprehensive digital strategy for a tech startup, resulting in a 300% growth in leads and a 150% increase in customer acquisition.</p>
                        <button className={styles.view}>View Case Study</button>
                    </div>
                    <Image src={Startup} alt="" className={styles.retailer} />
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default CaseStudies;