import React from 'react';
import { IoChevronDownCircleSharp } from 'react-icons/io5';
import styles from './Faq.module.css';
import office from '../../images/office.png';

const FaqSection = () => (
  <div className={styles.faqcontainer}>
    <img src={office} alt={office} />
    <div className={styles.faqText}>
      <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
      <div>
        <div className={styles.texwithticons}>
          <p>We connect our customers with the best?</p>
          <IoChevronDownCircleSharp className={styles.icon} />
        </div>
        <div className={styles.texwithticons}>
          <p>Android research & development rockstar? </p>
          <IoChevronDownCircleSharp className={styles.icon} />
        </div>
      </div>
    </div>
  </div>

);

export default FaqSection;
