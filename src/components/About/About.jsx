import React from 'react';
import styles from './About.module.css';
import maleimg from '../../images/male2.png';
import female from '../../images/female3.png';
import suitImg from '../../images/suit.png';
import fileImg from '../../images/files.png';
import groupImg from '../../images/group.png';

const About = () => (
  <div className={styles.about}>
    <div className={styles.aboutTop}>
      <h2>About</h2>
      <h3>We love to make great things, things that matter.</h3>
      <p>
        Funding handshake buyer business-to-business metrics iPad partnership.
        First mover advantage innovator success deployment non-disclosure.
      </p>
    </div>

    <section className={styles.imageBox}>
      <div className={styles.images}>
        <img src={maleimg} alt="Male on phone" />
        <img src={female} alt="Female on macbook" className={styles.gridItem} />
        <img src={suitImg} alt="Lady on suit" />
        <img src={fileImg} alt="Files" />
        <img src={groupImg} alt="Collaboration in group" />
      </div>
    </section>
  </div>
);

export default About;
