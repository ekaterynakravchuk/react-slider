import React, { useEffect, useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { LuQuote } from 'react-icons/lu';
import { shortList, list, longList } from '../data';

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);
  return (
    <section className='slider'>
      <div className='prevButton slider-btn' onClick={prevSlide}>
        <GrPrevious />
      </div>
      <div className='slider-container'>
        {people.map((person, index) => {
          return (
            <div
              key={index}
              className='slide'
              style={{
                transform: `translateX(${100 * (index - currentPerson)}%)`,
                opacity: index === currentPerson ? 1 : 0,
                visibility: index === currentPerson ? 'visible' : 'hidden',
              }}
            >
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
      </div>
      <div className='nextButton slider-btn' onClick={nextSlide}>
        <GrNext />
      </div>
    </section>
  );
};

export default Carousel;
