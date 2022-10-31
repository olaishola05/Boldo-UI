import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import styles from './Layout.module.css';
import blackLogo from '../../images/brand.png';

function TopBar() {
  const [changeClass, setChangeClass] = useState(styles.navcontainer);
  const [logo, setLogo] = useState(styles.logo);
  const [brand, setBrand] = useState(styles.Logo);
  const links = [
    { to: '/', text: 'Product' },
    { to: '/#service', text: 'Service' },
    { to: '/about', text: 'About' },
    { to: '/login', text: 'Log In' },
  ];
  const location = useLocation();
  const { hash, key } = location;

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [key, hash]);

  useEffect(() => {
    if (window.location.pathname === '/blog') {
      setChangeClass(styles.dynamicNav);
      setLogo(styles.dynamicLogo);
      setBrand(blackLogo);
    } else {
      setChangeClass(styles.navcontainer);
      setLogo(styles.logo);
      setBrand(Logo);
    }
  }, [location]);

  return (
    <div className={changeClass}>
      <div className={logo}>
        <img src={brand} alt="company logo" />
        <h1><Link to="/">Boldo</Link></h1>
      </div>

      <ul>
        { links.map((link) => (
          <li key={link.to}>
            {link.to === '/login' ? (
              <button type="button" className={styles.navbtn}>
                <Link to={link.to}>{link.text}</Link>
              </button>
            ) : (
              <Link to={link.to}>{link.text}</Link>
            )}
          </li>
        )) }
      </ul>
    </div>
  );
}

export default TopBar;
