"use client";

import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Image from 'next/image';
import Success from '../../assets/success.svg';
import styles from './case.module.css';

const CaseStudies = () => {
    return(
        <div className={styles.caseStudies}>
            <Navbar />
            <div className={styles.caseTop}>
                <div className={styles.caseLeft}>
                    <h1>Our Success Stories</h1>
                    <p>Teepremium Agency began with a simple mission: to help brands grow smarter, faster, and stronger in the digital world.A full-service digital marketing agency trusted by businesses worldwide. Through innovation, data-driven strategies, and a passion for results, We have helped clients achieve remarkable growth—from boosting online visibility to driving record-breaking sales. Our success is built on one core belief: when our clients win, we win.</p>
                </div>
                <Image src={Success} alt="" className={styles.caseImage} />
            </div>
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
                <Image src={Retailer} alt="" className={styles.retailer} />
            </section>
            <section className={styles.section}>
                <div className={styles.caseLeft}>
                    <p><strong>Driving Growth for a Tech Startup</strong></p>
                    <p>Implemented a comprehensive digital strategy for a tech startup, resulting in a 300% growth in leads and a 150% increase in customer acquisition.</p>
                    <button className={styles.view}>View Case Study</button>
                </div>
                <Image src={Retailer} alt="" className={styles.retailer} />
            </section>
            <Footer />
        </div>
    )
}

export default CaseStudies;