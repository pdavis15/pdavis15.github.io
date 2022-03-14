import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Isolation from './pages/isolation';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
  return (
    <div className='App'>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/events' element={<Projects />} />
            <Route path='/annual' element={<Contact />} />
            <Route path='/isolation' element={<Isolation />} />
          </Routes>
        </Router>
    </div>
  );
}
  
export default App;
