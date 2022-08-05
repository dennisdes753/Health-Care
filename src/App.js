import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import OurCare from './Pages/Our-Care/ourCare';
import Pricing from './Pages/Pricing/pricing';
import OurCommunities from './Pages/Our-Communities/ourCommunities';
import Career from './Pages/Career/career';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element= {<About/>} />  
            <Route path="/our-care" element= {<OurCare/>} />  
            <Route path="/pricing" element= {<Pricing/>} />
            <Route path="/our-communities" element= {<OurCommunities/>} />
            <Route path="/career" element= {<Career/>} />
          </Routes>
        </BrowserRouter>  
      </div>
    </>  
  );
}

export default App;
