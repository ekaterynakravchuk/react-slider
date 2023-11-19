import { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import SlickCarousel from './components/SlickCarousel';

function App() {
  return (
    <>
      <h2>Custom Slider</h2>
      <Carousel />
      <SlickCarousel />
    </>
  );
}

export default App;
