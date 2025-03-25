import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OnePageApp from './pages/OnePageApp';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './styles.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<OnePageApp />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
