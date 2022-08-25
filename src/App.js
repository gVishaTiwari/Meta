
import './App.css';
import MainHeader from './components/MainHeader';
import  Home  from './pages/Home';
import About from './pages/About';
import Testimonial from './pages/Testimonial';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
    <MainHeader/>
    <Home/>
    <About/>
    <Team/>
    <Testimonial/>
    <Pricing/>
    <Contact/>

    </div>
  );
}

export default App;
