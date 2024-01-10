'use client';

import 'swiper/css';

import 'swiper/css/navigation';

import './page.css';

import Image from 'next/image';

import data from './mockData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function Home() {
  const classes = ['circle', 'right', 'left'];

  let lastClass = '';

  const dataWithClasses = data.map((item) => {
    let currentClass;
    do {
      currentClass = classes[Math.floor(Math.random() * classes.length)];
    } while (currentClass === lastClass);

    lastClass = currentClass;

    return {
      ...item,
      randomClass: currentClass,
    };
  });

  return (
    <main className='main'>
      <div className='wrapper'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView='auto'
          navigation={{
            nextEl: '.swiper-button-next-unique',
            prevEl: '.swiper-button-prev-unique',
          }}>
          {dataWithClasses.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`slide ${item.title.length > 35 ? 'double-width' : ''}`}>
              <Image
                src={item.img}
                alt={item.title}
                width={344}
                height={344}
                className={item.randomClass}
              />
              <h2>{item.title}</h2>
              <p>{item.date}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-button-prev-unique'></div>
        <div className='swiper-button-next-unique'></div>
      </div>
    </main>
  );
}
