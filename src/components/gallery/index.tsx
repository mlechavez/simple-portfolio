import { Element, Link } from "react-scroll";
import { images } from "./data";
import { Pagination, EffectCube, EffectCoverflow } from "swiper";
import { FaArrowDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "./gallery.scss";
import "swiper/scss";
import "swiper/scss/effect-cube";
import "swiper/scss/effect-coverflow";

const Gallery = () => {
  const porsches = images.filter((p) => p.work === "porsche");
  const acns = images.filter((p) => p.work === "acn");
  const transition = { duration: 3, type: "spring" };

  return (
    <Element className="gallery h-100" name="gallery">
      <header>
        <motion.h2
          initial={{ x: "10%" }}
          whileInView={{ x: "0%" }}
          transition={transition}
        >
          Time of my life
        </motion.h2>
        <motion.p
          initial={{ x: "-10%" }}
          whileInView={{ x: "0%" }}
          transition={transition}
        >
          As I look back on my life, I realize that every time I thought I was
          being rejected from something good, I was actually being re-directed
          to something better
        </motion.p>
      </header>

      <div className="img-g-container bg-black">
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
        >
          {porsches.map((image) => {
            return (
              <SwiperSlide
                key={`${image.id.toString()}-${image.name}`}
                className="swiper1-slide"
              >
                <img src={image.src} alt={image.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <p className="text-center">
        Change can be scary, but you know what&apos;s scarier? Allowing the fear
        to stop you from growing, evolving, and progressing.
      </p>

      <div className="img-g-container bg-flesh">
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
        >
          {acns.map((image) => {
            return (
              <SwiperSlide
                key={`${image.id.toString()}-${image.name}`}
                className="swiper-slide2"
              >
                <img src={image.src} alt={image.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Link
        className="btn btn-primary"
        to="music"
        spy={true}
        smooth={true}
        duration={800}
      >
        Music <FaArrowDown size={24} />
      </Link>
    </Element>
  );
};

export default Gallery;
