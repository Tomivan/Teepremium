"use client";
import React from 'react';
import Image from 'next/image';
import Service from '../../assets/services.svg';
import styles from './services.module.css';
import Navbar from '../components/navbar/navbar';
import Card from '../components/card/card';
import Footer from '../components/footer/footer';

const Services = () => {
    const servicesData = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility in search engine results pages (SERPs) with our proven SEO strategies. We conduct thorough keyword research, optimize your website's structure and content, and build high-quality backlinks to boost your organic traffic and rankings.",
      plans: [
        {
          name: "Basic SEO",
          price: 500,
          period: "month",
          features: [
            "Keyword Research",
            "On-Page Optimization",
            "Basic Reporting"
          ]
        },
        {
          name: "Advanced SEO",
          price: 1200,
          period: "month",
          features: [
            "Keyword Research",
            "On-Page Optimization",
            "Off-Page Optimization",
            "Advanced Reporting"
          ]
        },
        {
          name: "Enterprise SEO",
          price: 2500,
          period: "month",
          features: [
            "Comprehensive Keyword Research",
            "Full On-Page Optimization",
            "Technical SEO Optimization",
            "Customized Reporting",
            "Dedicated Account Manager"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Engage your target audience and build a strong social media presence with our social media marketing services. We create compelling content, manage your social media accounts, and run targeted advertising campaigns to increase brand awareness and drive conversions.",
      plans: [
        {
          name: "Social Media Starter",
          price: 300,
          period: "month",
          features: [
            "Content Creation",
            "Community Management",
            "Basic Analytics"
          ]
        },
        {
          name: "Social Media Growth",
          price: 700,
          period: "month",
          features: [
            "Content Creation",
            "Community Management",
            "Influencer Outreach",
            "Advanced Analytics"
          ]
        },
        {
          name: "Social Media Pro",
          price: 1500,
          period: "month",
          features: [
            "Custom Content Strategy",
            "Dedicated Community Manager",
            "Influencer Partnerships",
            "Comprehensive Analytics",
            "Paid Advertising Management"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Content Creation",
      description: "Attract and retain your audience with high-quality, engaging content. Our content creation services include blog posts, articles, website copy, and more. Tailored to your brand voice and target audience.",
      plans: [
        {
          name: "Content Writing",
          price: 100,
          period: "article",
          features: [
            "SEO Optimized Articles",
            "Keyword Research",
            "Basic Editing"
          ]
        },
        {
          name: "Content Strategy",
          price: 300,
          period: "month",
          features: [
            "Content Calendar",
            "Topic Ideation",
            "Performance Tracking"
          ]
        },
        {
          name: "Full Content Package",
          price: 800,
          period: "month",
          features: [
            "Content Writing",
            "Content Strategy",
            "Social Media Promotion",
            "Performance Analysis"
          ]
        }
      ]
    }
  ];
    return(
        <div className={styles.services}>
            <Navbar />
            <div className={styles.servicesTop}>
                <div className={styles.servicesLeft}>
                    <h1>Our <br/> Digital <br /> Marketing <br /> Services</h1>
                    <p>We offer a comprehensive suite of digital marketing services designed to<br /> 
                    elevate your brand's online presence and drive measurable results.From <br />
                    search engine optimization to social media management, our team of experts <br /> 
                    is dedicated to crafting tailored strategies that align with your business goals.</p>
                </div>
                <Image src={Service} alt="Services vector" className={styles.servicesRight} />
            </div>
            {servicesData.map((service) => (
                <section className={styles.serviceSection}>
                    <div className={styles.serviceCategory}>
                        <div className={styles.serviceHeader}>
                            <h2>{service.title}</h2>
                        </div>
                        <div className={styles.serviceDescription}>
                            <p>{service.description}</p>
                        </div>
                        <div className={styles.cardContainer}>
                            {service.plans.map((plan, index) => (
                            <Card key={index} plan={plan} />
                            ))}
                        </div>
                    </div>
                </section>))}
            <Footer />
        </div>
    )
}

export default Services;