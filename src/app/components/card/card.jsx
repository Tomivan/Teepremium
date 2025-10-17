"use client";

import React from 'react';
import styles from './card.module.css';

const Card = ({ plan }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{plan.name}</h3>
        <div>
         <strong className={styles.cardPrice}>${plan.price}</strong>  <span className={styles.cardPeriod}>/{plan.period}</span>
        </div>
      </div>
      <div className={styles.cardBody}>
          {plan.features.map((feature, index) => (
            <p key={index} className={styles.featureItem}>
              &#10003;  {feature}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Card;