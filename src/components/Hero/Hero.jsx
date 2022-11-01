import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../images/heroImg.png';
import fundingImg from '../../images/LogoWall.png';
import { ThemeContext } from '../Themes/ThemeContext';
import groupLogo from '../../images/group-logo.png';

const Hero = () => {
  const { isTheme } = React.useContext(ThemeContext);
  return (
    <div className={styles.main} style={isTheme ? { backgroundColor: 'white', color: 'black' } : {}}>
      <div className={styles.herocontainer}>
        <div className={styles.herotext}>
          <h1 style={isTheme ? { backgroundColor: 'white', color: 'black' } : {}}>Save time by building fast with Boldo Template</h1>
          <p style={isTheme ? { backgroundColor: 'white', color: '#777777' } : {}}>
            Funding handshake buyer business-to-business metrics iPad partnership.
            First mover advantage innovator success deployment non-disclosure.
          </p>
          <div className={styles.btns}>
            <button type="button" className={styles.buyBtn} style={isTheme ? { backgroundColor: '#0A2640', border: '2px solid #0A2640', color: 'white' } : {}}>Buy template</button>
            <button type="button" className={styles.exploreBtn} style={isTheme ? { backgroundColor: 'white', border: '2px solid #0A2640', color: '#0A2640' } : {}}>Explore</button>
          </div>
        </div>

        <div className={styles.heroimg}>
          <img src={heroImg} alt={heroImg} />
        </div>
      </div>

      <div className={styles.funding}>
        <img src={isTheme ? groupLogo : fundingImg} alt="funding logos" />
      </div>
    </div>
  );
};

export default Hero;
