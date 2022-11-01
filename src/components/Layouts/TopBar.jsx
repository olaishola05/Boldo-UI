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

  return (
    <div className={changeClass} style={isTheme ? { backgroundColor: 'white', color: 'black', transition: 'background .5s ease' } : {}}>
      <div className={logo}>
        <img src={isTheme ? blackLogo : brand} alt="company logo" />
        <h1><Link to="/" style={isTheme ? { backgroundColor: 'white', color: 'black' } : {}}>Boldo</Link></h1>
      </div>

      <ul>
        { links.map((link) => (
          <li key={link.to}>
            {link.to === '/login' ? (
              <button type="button" className={styles.navbtn} style={isTheme ? { backgroundColor: 'white', color: 'black', border: '1px solid black' } : {}}>
                <Link to={link.to}>{link.text}</Link>
              </button>
            ) : (
              <Link to={link.to} style={isTheme ? { backgroundColor: 'white', color: 'black' } : {}}>{link.text}</Link>
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
  );
}

export default TopBar;
