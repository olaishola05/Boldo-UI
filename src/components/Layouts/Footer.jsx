import React from 'react';
import styles from './Layout.module.css';
import logoBlk from '../../images/Logoblk.png';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerTop}>
      <div className={styles.footerTopForm}>
        <h3>An enterprise template to ramp up your company website</h3>
        <div className={styles.form}>
          <label htmlFor="email">
            <input type="text" id="email" placeholder="Your email address" />
          </label>
          <button type="button">Start now</button>
        </div>
      </div>
    </div>

    <div className={styles.footerBtm}>
      <div className={styles.links}>
        <img src={logoBlk} alt={logoBlk} />
        <div className={styles.footnav}>
          <ul className={styles.footnavs}>
            <li>
              Landings
            </li>

            <li>
              Company
            </li>

            <li>
              Resources
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBtmText}>
        <p>
          Social media validation business model canvas graphical
          user interface launch party creative facebook iPad twitter.
        </p>

        <div className={styles.reflinks}>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>

          <ul>
            <li>Home</li>
            <li>
              Careers
              {' '}
              <span>Hiring!</span>
            </li>
            <li>Services</li>
          </ul>

          <ul>
            <li>Blog</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
