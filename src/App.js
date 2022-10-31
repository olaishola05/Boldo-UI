import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import Home from './components/Home/Home';
import BlogHomepage from './components/Blog/BlogHomepage';
import About from './components/About/About';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'Home';
    }
    if (location.pathname === '/blog') {
      document.title = 'Blog';
    }
    if (location.pathname === '/about') {
      document.title = 'About';
    }
  }, [location]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/blog" element={<BlogHomepage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
