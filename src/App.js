import './App.css';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import { Route, Routes } from 'react-router-dom';
import Testimonial from './components/Testimonial/Testimonial';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Hameburger from './components/Hameburger/Hameburger';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
  
    <Navbar/>
   <Hameburger/>
    <Home/>
    <Service/>
    <About/>
    <Portfolio/>
    <Testimonial/>
    <Team/>
    <Blog/>
    <Contact/> 
    <Footer/> 
    
    </>

  );
}

export default App;
