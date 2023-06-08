import React from 'react';
import { Navbar } from './components/navbar';
import './App.css';
import { Main } from './components/main';
import { Traditional } from './components/traditionnel_food';
import { Testimonials } from './components/testimonials';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Traditional/>
      <Testimonials/>
      <Footer/>
 
    </div>
  );
}

export default App;
