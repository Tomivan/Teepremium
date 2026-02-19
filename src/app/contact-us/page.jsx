"use client"

import React from 'react';
import styles from './contact.module.css';
import Footer from '../components/footer/footer';
import Contact from '../../assets/contact.svg';
import Image from 'next/image';
import Navbar from '../components/navbar/navbar';

const ContactUs = () => {
    return(
        <div className={styles.contactUs}>
            <Navbar />
            <div className={styles.content}>
                <Image src={Contact} alt="" className={styles.contactImage} width="700" height="600"/>
                <div className={styles.contactText}>
                    <h1>Contact Us</h1>
                    <p>We're here to help you grow your business. Reach out to us with any questions or inquiries.</p>
                    <form className={styles.contactForm}>
                        <label className={styles.label}>Your Name</label>
                        <input type="text" className={styles.input}  />
                        <label className={styles.label}>Your Email</label>
                        <input type="text" className={styles.input}  />
                        <label className={styles.label}>Subject</label>
                        <input type="text" className={styles.input}  />
                        <label className={styles.label}>Message</label>
                        <textarea className={styles.textarea}></textarea>
                        <button type="submit" className={styles.submitButton}>Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs;