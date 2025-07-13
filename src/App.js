// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {
  Home,
  About,
  Events,
  Achievements,
  Faculty,
  OfficeBearers,
  IndustryAlumni,
  Contact
} from './pages';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/office-bearers" element={<OfficeBearers />} />
          <Route path="/industry-alumni" element={<IndustryAlumni />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
