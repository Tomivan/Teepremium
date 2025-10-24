"use client"

import React from 'react';
import styles from './contact.module.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const ContactUs = () => {
    return(
        <div className={styles.contactUs}>
            <Navbar />
            <div className={styles.content}>
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
            <Footer />
        </div>
    )
}

export default ContactUs;