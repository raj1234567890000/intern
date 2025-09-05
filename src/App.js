
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import{Route, Routes} from 'react-router-dom'
import Services from './Component/Services';
import Gallery from './Component/Gallery';


function App() {
  return (
    
     <>

  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/about" element={<About />} />
     <Route path="/services" element={<Services />} />
     <Route path="/gallery" element={<Gallery />} />
  </Routes>


    </>
  );
}

export default App;


