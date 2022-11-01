import React, { createContext } from 'react';
import propTypes from 'prop-types';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default ThemeProvider;
