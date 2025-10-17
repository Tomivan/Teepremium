"use client"

import React from 'react';
import styles from './contact.module.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const ContactUs = () => {
    return(
        <div className={styles.contactUs}>
            <Navbar />
            <h1>Contact Us</h1>
            <p>We're here to help you grow your business. Reach out to us with any questions or inquiries.</p>
            <form className={styles.contactForm}>
                <label className={styles.label}>Your Name</label>
                <input type="text" className={styles.input} placeholder="Enter your name" />
                <label className={styles.label}>Your Email</label>
                <input type="text" className={styles.input} placeholder="Enter your Email" />
                <label className={styles.label}>Subject</label>
                <input type="text" className={styles.input} placeholder="Need a consultation" />
                <label className={styles.label}>Message</label>
                <Textarea className={styles.textarea} placeholder="Write your message here..." />
                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
            <Footer />
        </div>
    )
}

export default ContactUs;