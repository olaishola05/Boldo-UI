import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../images/heroImg.png';
import fundingImg from '../../images/LogoWall.png';

const Hero = () => (
  <div className={styles.main}>
    <div className={styles.herocontainer}>
      <div className={styles.herotext}>
        <h1>Save time by building fast with Boldo Template</h1>
        <p>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className={styles.btns}>
          <button type="button" className={styles.buyBtn}>Buy template</button>
          <button type="button" className={styles.exploreBtn}>Explore</button>
        </div>
      </div>

      <div className={styles.heroimg}>
        <img src={heroImg} alt={heroImg} />
      </div>
    </div>

    <div className={styles.funding}>
      <img src={fundingImg} alt="funding logos" />
    </div>
  </div>
);

export default Hero;
