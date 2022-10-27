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

const Services = () => (
  <div className={styles.services}>
    <h2>Our Services</h2>
    <div>
      <h3 className={styles.heading}>Handshake infographic mass market crowdfunding iteration.</h3>

      <div className={styles.servicebox}>
        <div className={styles.boxes}>
          <img src={ImgSuit} alt="suit" />
          <div>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects return on investment.</p>
          </div>
          <Link to="/explore">
            Explore page
            <img src={arrowRight} alt="arrows" />
          </Link>
        </div>

        <div className={styles.boxes}>
          <img src={shakingImg} alt="two people shaking" />
          <div>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects return on investment.</p>
          </div>
          <Link to="/explore">
            Explore page
            <img src={arrowRight} alt="arrows" />
          </Link>
        </div>

        <div className={styles.boxes}>
          <img src={sitImg} alt="suit" />
          <div>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects return on investment.</p>
          </div>
          <Link to="/explore">
            Explore page
            <img src={arrowRight} alt="arrows" />
          </Link>
        </div>
      </div>
    </div>

    <div>
      <img src={MaleImg} alt="Male infographic" />
      <div>
        <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
        <div>
          <img src={Check} alt="tick" />
          <p>We connect our customers with the best.</p>
        </div>

        <div>
          <img src={Check} alt="tick" />
          <p>Advisor success customer launch party.</p>
        </div>

        <div>
          <img src={Check} alt="tick" />
          <p>Business-to-consumer long tail.</p>
        </div>
        <button type="button">Start now</button>
      </div>
    </div>

    <div>
      <img src={FemaleImg} alt="Female infographic" />
      <div>
        <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
        <div>
          <img src={leave} alt="tick" />
          <p>We connect our customers with the best.</p>
        </div>
        <div>
          <img src={eye} alt="tick" />
          <p>Advisor success customer launch party.</p>
        </div>
        <div>
          <img src={sun} alt="tick" />
          <p>Business-to-consumer long tail.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
