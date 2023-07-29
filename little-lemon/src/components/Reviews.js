import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import review_photo from '../assets/review_photo.jpg';

const reviews = [
  {
    name: "Sully",
    img: review_photo,
    review: "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor."
  },
  {
    name: "Olha",
    img: review_photo,
    review: "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor."
  },
  {
    name: "Jack",
    img: review_photo,
    review: "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor."
  },
]

const Reviews = () => {
  const swiperRef = useRef();
  return (
    <div className="reviewsContainer">
      <button onClick={() => swiperRef.current?.slidePrev()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <Swiper
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {reviews.map(r => <SwiperSlide><Review img={r.img} name={r.name} review={r.review} key={Math.random()} /></SwiperSlide>)}
      </Swiper>
      <button onClick={() => swiperRef.current?.slideNext()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
};

export default Reviews;