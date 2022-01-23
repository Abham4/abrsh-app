
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Price from './components/Price';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Services />
      <About />
      <Price />
      <Contact />
    </div>
  );
}

export default App;
