import './App.css';
import Hero from './components/Hero/Hero';
import Layout from './components/Layouts/Layout';
import Services from './components/Services/Services';
import Testimonies from './components/Testimonies/Testimonies';

function App() {
  return (
    <Layout>
      <div className="App">
        <Hero />
        <Services />
        <Testimonies />
      </div>
    </Layout>
  );
}

export default App;
