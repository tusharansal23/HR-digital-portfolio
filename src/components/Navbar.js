import { Link } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import { useState } from 'react';
import '../styles.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <Briefcase className="icon" />
          HR Digital
        </Link>

        {/* <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> */}
      </div> 
    </nav>
  );
}
