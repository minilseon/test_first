// import logo from './logo.svg';
// import './App.css';
import './style.css';
import styled from 'styled-components';

import About from './components/About';
import Home from './components/Home';
import Members from './components/Members';

import { Routes, Route, Link } from 'react-router-dom';



function App() {      

  const GnbLink = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover {
    font-weight: bold}
  `
  
  return (
    <div className='wrap'>

      <ul className='gnb'>
        <li><GnbLink to={'/'}>Home</GnbLink></li>
        <li><GnbLink to={'about'}>About</GnbLink></li>
        <li><GnbLink className='member' to={'members'}>Members</GnbLink></li>
      </ul>
      
      <hr />

      <Routes>
        <Route path='/test' element={<Home />} />
        <Route path='/test/about' element={<About />} />
        <Route path='/test/members/*' element={<Members />} />
      </Routes>
        
    </div>
  );
}

export default App;


