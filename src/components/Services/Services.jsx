import React from 'react';
import { Link } from 'react-router-dom';
import ImgSuit from '../../images/suit.png';
import MaleImg from '../../images/male.png';
import FemaleImg from '../../images/female.png';
import Check from '../../images/check.png';
import leave from '../../images/feather.png';
import eye from '../../images/eye.png';
import sun from '../../images/sun.png';
import sitImg from '../../images/sitting.png';
import arrowRight from '../../images/arrow-right.png';
import shakingImg from '../../images/shake.png';
import styles from './Service.module.css';
import { ThemeContext } from '../Themes/ThemeContext';

const Services = () => {
  const { isTheme } = React.useContext(ThemeContext);
  return (
    <div className={styles.services} id="service" style={isTheme ? { padding: 0, transition: 'background .5s ease' } : {}}>
      <div style={isTheme ? {
        backgroundColor: '#0A2640', color: 'white', padding: '50px 80px', transition: 'background .5s ease',
      } : {}}
      >
        <h2 style={isTheme ? { color: '#F1F1F1' } : {}}>Our Services</h2>
        <div>
          <h3 className={styles.heading} style={isTheme ? { color: 'white' } : {}}>
            Handshake infographic mass market crowdfunding iteration.
          </h3>

          <div className={styles.servicebox}>
            <div className={styles.boxes} style={isTheme ? { borderRadius: '24px', backgroundColor: '#0A2640' } : {}}>
              <img src={ImgSuit} alt="suit" />
              <div>
                <h3 style={isTheme ? { color: 'white', marginTop: '20px' } : {}}>Cool feature title</h3>
                <p style={isTheme ? { color: 'white' } : {}}>Learning curve network effects return on investment.</p>
                <Link to="/explore" className={styles.links}>
                  Explore page
                  <img src={arrowRight} alt="arrows" />
                </Link>
              </div>
            </div>

            <div className={styles.boxes} style={isTheme ? { borderRadius: '24px', backgroundColor: '#0A2640' } : {}}>
              <img src={shakingImg} alt="two people shaking" />
              <div>
                <h3 style={isTheme ? { color: 'white', marginTop: '20px' } : {}}>Cool feature title</h3>
                <p style={isTheme ? { color: 'white' } : {}}>Learning curve network effects return on investment.</p>
                <Link to="/explore">
                  Explore page
                  <img src={arrowRight} alt="arrows" />
                </Link>
              </div>
            </div>

            <div className={styles.boxes} style={isTheme ? { borderRadius: '24px', backgroundColor: '#0A2640' } : {}}>
              <img src={sitImg} alt="suit" />
              <div>
                <h3 style={isTheme ? { color: 'white', marginTop: '20px' } : {}}>Cool feature title</h3>
                <p style={isTheme ? { color: 'white' } : {}}>Learning curve network effects return on investment.</p>
                <Link to="/explore">
                  Explore page
                  <img src={arrowRight} alt="arrows" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.info} style={isTheme ? { padding: '0px 80px' } : {}}>
        <div className={styles.infoImg}>
          <img src={MaleImg} alt="Male infographic" />
        </div>
        <div className={styles.infotext}>
          <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
          <div className={styles.infoitems}>
            <img src={Check} alt="tick" />
            <p>We connect our customers with the best.</p>
          </div>

          <div className={styles.infoitems}>
            <img src={Check} alt="tick" />
            <p>Advisor success customer launch party.</p>
          </div>

          <div className={styles.infoitems}>
            <img src={Check} alt="tick" />
            <p>Business-to-consumer long tail.</p>
          </div>
          <button type="button">Start now</button>
        </div>
      </div>

      <div className={styles.info} style={isTheme ? { padding: '0px 80px', display: 'flex', flexDirection: 'row-reverse' } : { display: 'flex', flexDirection: 'row-reverse' }}>
        <div className={styles.infoImgTwo}>
          <img src={FemaleImg} alt="Female infographic" />
        </div>
        <div className={styles.infotext}>
          <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
          <div className={`${styles.infoitems2} ${styles.special}`}>
            <img src={leave} alt="leave" />
            <p>
              We connect our customers with the best.
            </p>
          </div>
          <div className={styles.infoitems2}>
            <img src={eye} alt="eye" />
            <p>Advisor success customer launch party.</p>
          </div>
          <div className={styles.infoitems2}>
            <img src={sun} alt="sun" />
            <p>Business-to-consumer long tail.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
