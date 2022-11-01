import React from 'react';
import styles from './About.module.css';
import maleimg from '../../images/male2.png';
import female from '../../images/female3.png';
import suitImg from '../../images/suit.png';
import fileImg from '../../images/files.png';
import groupImg from '../../images/group.png';
import mikeImg from '../../images/mike.png';
import dwightImg from '../../images/dwight.png';
import pamImg from '../../images/pam.png';
import handshake from '../../images/handshake.png';
import valueImg1 from '../../images/value1.png';
import valueImg2 from '../../images/value2.png';
import { ThemeContext } from '../Themes/ThemeContext';

const About = () => {
  const { isTheme } = React.useContext(ThemeContext);
  return (
    <div className={styles.about}>
      <div className={styles.aboutTop} style={isTheme ? { backgroundColor: 'white', transition: 'background .5s ease' } : {}}>
        <h2 style={isTheme ? { color: 'black' } : {}}>About</h2>
        <h3 style={isTheme ? { color: 'black' } : {}}>We love to make great things, things that matter.</h3>
        <p style={isTheme ? { color: '#777777' } : {}}>
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

        <div className={styles.story}>
          <h2>Our story</h2>
          <h3>Handshake infographic mass market crowdfunding iteration.</h3>
          <p>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus. Sales
            user experience branding growth hacking holy grail monetization
            conversion prototype stock network effects. Learning curve network
            effects return on investment bootstrapping business-to-consumer.
          </p>
        </div>
      </section>

      <section className={styles.info}>
        <div>
          <h2>Our numbers</h2>
          <h3>Handshake infographic mass market crowdfunding iteration.</h3>

          <div className={styles.infographic}>
            <div>
              <h4>
                120m
              </h4>
              <span>Cool feature title</span>
            </div>
            <div>

              <h4>
                10.000
              </h4>
              <span>Cool feature title</span>
            </div>
            <div>

              <h4>
                240
              </h4>
              <span>Cool feature title</span>
            </div>
          </div>
        </div>

      </section>
      <div className={styles.teams}>
        <div className={styles.header}>
          <h2>Our team</h2>
          <h3>The leadership team</h3>
        </div>
        <p>
          Conversion angel investor entrepreneur first mover advantage. Handshake
          infographic mass market crowdfunding iteration.
          Traction stock user experience deployment beta innovator incubator focus.
        </p>
      </div>

      <div className={styles.ourteam}>
        <div>
          <img src={mikeImg} alt="Mike" />
          <h5>Michael Scott</h5>
          <span>General Manager</span>
        </div>

        <div>
          <img src={dwightImg} alt="dwight" />
          <h5>Dwight Schrute</h5>
          <span>General Manager</span>
        </div>

        <div>
          <img src={pamImg} alt="pam" />
          <h5>Pam Beetsley</h5>
          <span>General Manager</span>
        </div>
      </div>

      <div className={styles.values}>
        <div>
          <h2>Our values</h2>
          <h3>Things in we believe</h3>
        </div>
        <p>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration.
          Traction stock user experience deployment beta innovator incubator focus.
        </p>

        <div className={styles.value}>
          <img src={valueImg1} alt="files" />
          <div>
            <h5>We are commited.</h5>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>

        <div className={styles.value}>
          <img src={valueImg2} alt="files" />
          <div>
            <h5>We are responsible.</h5>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>

        <div className={`${styles.value} ${styles.last}`}>
          <img src={handshake} alt="files" />
          <div>
            <h5>We aim for progress.</h5>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
