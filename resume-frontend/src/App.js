import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Isolation from './pages/isolation';
import Resume from './pages/resume'
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
  return (
    <div className='App'>
        <Router basename='/'>
          <NavigationBar />
          {/* <div className='rightSideContainer'>
            <div className='rightSide'>
              <p>3 Years Software Experience ... Triple Major ... Secret Level Clearance</p>
            </div>

          </div> */}
          <div className='homeContainer'>
            <Routes >
              <Route exact path='/' exact element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/isolation' element={<Isolation />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}
  
export default App;
