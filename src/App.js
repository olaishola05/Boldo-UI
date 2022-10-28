import './App.css';
import Hero from './components/Hero/Hero';
import Layout from './components/Layouts/Layout';
import Services from './components/Services/Services';

function App() {
  return (
    <Layout>
      <div className="App">
        <Hero />
        <Services />
      </div>
    </Layout>
  );
}

export default App;
