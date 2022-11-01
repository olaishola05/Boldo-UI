import React, { createContext } from 'react';
import propTypes from 'prop-types';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [isTheme, setTheme] = React.useState(false);

  const toggleTheme = () => {
    setTheme(!isTheme);
  };

  return (
    <ThemeContext.Provider value={{ isTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
