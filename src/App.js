import { BrowserRouter as Router, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {

  // const navigate = useNavigate();


  return (
    <Router>
      <ul className='flex list'>
        <li >
          <Link style={{ textDecoration: "none", color: "white" }} to="/home">

            Home
          </Link>
        </li>
        <li >
          <Link style={{ textDecoration: "none", color: "white" }} to="/about">
            About
          </Link>
        </li>
        <li >
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
