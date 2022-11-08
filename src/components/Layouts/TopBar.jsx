/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import Logo from '../../images/Logo.png';
import styles from './Layout.module.css';
import blackLogo from '../../images/brand.png';
import { ThemeContext } from '../Themes/ThemeContext';

function TopBar() {
  const [changeClass, setChangeClass] = useState(styles.navcontainer);
  const [logo, setLogo] = useState(styles.logo);
  const [brand, setBrand] = useState(styles.Logo);
  const { isTheme, toggleTheme } = React.useContext(ThemeContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

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
    if (location.pathname === '/blog') {
      setChangeClass(styles.dynamicNav);
      setLogo(styles.dynamicLogo);
      setBrand(blackLogo);
    } else {
      setChangeClass(styles.navcontainer);
      setLogo(styles.logo);
      setBrand(Logo);
    }
  }, [location]);

  const handleNavExpand = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleClose = () => {
    setIsNavExpanded(false);
  };

  return (
    <div className={changeClass} style={isTheme ? { backgroundColor: 'white', color: 'black', transition: 'background .5s ease' } : {}}>
      <div className={logo}>
        <img src={isTheme ? blackLogo : brand} alt="company logo" />
        <h1><Link to="/" style={isTheme ? { backgroundColor: 'white', color: 'black' } : {}}>Boldo</Link></h1>
      </div>

      <button
        type="button"
        className={styles.hamburger}
        onClick={handleNavExpand}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>

      </button>

      <div className={isNavExpanded ? `${styles.navigationMenu} ${styles.expanded}` : styles.navigationMenu}>
        <ul style={isTheme ? { backgroundColor: 'white', color: 'black' } : {}}>
          { links.map((link) => (
            <li key={link.to}>
              {link.to === '/login' ? (
                <button type="button" className={styles.navbtn} style={isTheme ? { backgroundColor: 'white', color: 'black', border: '1px solid black' } : {}}>
                  <Link to={link.to}>{link.text}</Link>
                </button>
              ) : (
                <Link to={link.to} style={isTheme ? { backgroundColor: 'white', color: 'black' } : {}} onClick={() => handleClose()}>{link.text}</Link>
              )}
            </li>
          )) }
          {location.pathname === '/blog' ? '' : (
            <li className={styles.toggle} onClick={() => toggleTheme()}>
              {isTheme ? <BsToggleOn /> : <BsToggleOff />}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
