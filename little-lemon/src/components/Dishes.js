import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';


import Dish from '../components/Dish';
import pizza from '../assets/pizza.jpg';
import pasta from '../assets/pasta.jpg';
import salad from '../assets/salad.jpg';

const dishes = [
  {
    title: "Pizza",
    description: "Pizza description",
    url: pizza,
  },
  {
    title: "Pasta",
    description: "Pasta description",
    url: pasta,
  },
  {
    title: "Salad",
    description: "Salad description",
    url: salad,
  },
  {
    title: "Pizza 2",
    description: "Pizza description",
    url: pizza,
  },
  {
    title: "Pasta 2",
    description: "Pasta description",
    url: pasta,
  },
  {
    title: "Salad 2",
    description: "Salad description",
    url: salad,
  }
];

const Dishes = () => {
  const swiperRef = useRef();
  return (
    <div className="dishesContainer">
      <button onClick={() => swiperRef.current?.slidePrev()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {dishes.map(d => <SwiperSlide key={Math.random()}><Dish title={d.title} url={d.url} description={d.description} /></SwiperSlide>)}
      </Swiper>
      <button onClick={() => swiperRef.current?.slideNext()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
};


export default Dishes;