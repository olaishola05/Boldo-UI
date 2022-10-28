import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styles from './Testimonies.module.css';
import testimonyImage1 from '../../images/Testimonial.png';
import testimonyImg2 from '../../images/Testimonial2.png';
import testimonyImg3 from '../../images/Testimonial3.png';

const Testimonies = () => (
  <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.containertop}>
        <h3>An enterprise template to ramp up your company website</h3>
        <div className={styles.arrows}>
          <div>
            <FiArrowLeft className={styles.icons} />
          </div>
          <div>
            <FiArrowRight className={styles.icons} />
          </div>
        </div>

      </div>
      <div className={styles.imagegrid}>
        <img src={testimonyImage1} alt={testimonyImage1} />
        <img src={testimonyImg2} alt={testimonyImg2} />
        <img src={testimonyImg3} alt={testimonyImg3} />
      </div>
    </div>
  </div>
);

export default Testimonies;
