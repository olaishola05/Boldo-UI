import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import Home from './components/Home/Home';
import BlogHomepage from './components/Blog/BlogHomepage';
import About from './components/About/About';

function App() {
  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/blog" element={<BlogHomepage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
