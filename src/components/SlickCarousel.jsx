import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { LuQuote } from 'react-icons/lu';
import { list } from '../data';

const SlickCarousel = () => {
  const [people, setPeople] = useState(list);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className='slick-carousel'>
      <h2>Slick Slider</h2>
      <Slider {...settings}>
        {people.map((person, index) => {
          return (
            <div key={index} className='slick_slide'>
              <div className='slide-img'>
                <img src={person.image} alt={person.name} />
              </div>
              <h3 className='slide-name'>{person.name}</h3>
              <p>{person.title}</p>
              <p>{person.quote}</p>
              <LuQuote />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
