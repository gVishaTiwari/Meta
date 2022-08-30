
import './App.css';
import MainHeader from './components/MainHeader';
import  Home  from './pages/Home';
import About from './pages/About';
import Testimonial from './pages/Testimonial';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import TextImage from './pages/TextImage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <MainHeader/>
    <Home/>
    <TextImage/>
    <About/>
    <Team/>
    <Testimonial/>
    <Pricing/>
    <Contact/>
    <Footer/>   
     </div>
  );
}

export default App;
