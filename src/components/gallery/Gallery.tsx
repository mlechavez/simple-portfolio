import { Element } from "react-scroll";
import { images } from './data';
import { motion } from "framer-motion";

import { Pagination, EffectCube, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import PageTitle from '../common/PageTitle';
import ChevronDown from '../common/chevronDown/ChevronDown';

import "./gallery.scss";
import 'swiper/scss';
import 'swiper/scss/effect-cube';
import "swiper/scss/effect-coverflow";


const Gallery = () => {
  const porsches = images.filter(p => p.work === 'porsche');
  const acns = images.filter(p => p.work === 'acn');

  const transition = { duration: 2, type: 'spring' };

  return (
    <Element className="gallery h-100" name="gallery">
      <PageTitle title="Gallery" subtitle="Nostalgia" />
      <div className="wrapper">
        <div className="col-1">
          <motion.h3 initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={transition}>Porsche Qatar</motion.h3>

          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="swiper1"
          >
            {porsches.map(image => {
              return (
                <>
                  <SwiperSlide key={image.name}>
                    <img src={image.src} alt={image.name} />
                  </SwiperSlide>
                </>
              )
            })}
          </Swiper>
        </div>
        <div className="col-2">
          <motion.h3 initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={transition}>DET Custom Apps</motion.h3>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="swiper2"
          >
            {acns.map(image => {
              return (
                <>
                  <SwiperSlide key={image.name}>
                    <img src={image.src} alt={image.name} />
                  </SwiperSlide>
                </>
              )
            })}
          </Swiper>
        </div>
      </div>
      <ChevronDown navigateTo="usedToDo" color="yellow" size={30} blinking />
    </Element >
  );
};

export default Gallery;
