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
        <p>
          Social media validation business model canvas graphical user
          interface launch party creative facebook iPad twitter.

        </p>
        <div className={styles.footnavs}>
          <ul>
            <li>
              Landings
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </li>

            <li>
              Company
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </li>

            <li>
              Resources
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
