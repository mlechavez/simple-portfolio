import { Element, Link } from "react-scroll";
import { motion } from 'framer-motion';
import { me } from "./data"
import "./about.scss";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
  const transition = { duration: 3, type: 'spring' };

  return (
    <Element className="about h-100" name="about">
      <div className="container">
        <div className="about-me">
          <motion.h3
            initial={{ x: '-70%' }}
            whileInView={{ x: '0%' }}
            transition={transition}>
            I&apos;m Mark Lester Echavez.</motion.h3>

          <motion.p
            initial={{ x: '10%' }}
            whileInView={{ x: '0%' }}
            transition={transition}>
            I was born in Makati, and later moved in Binan, Laguna. I was a Civil engineering student at Mapua Intramuros and during my third year in college, I realized that this was not for me so, I stopped and later transferred to University of Perpetual Help as a Computer engineering student and finished my college at the same school.</motion.p>

          <motion.p
            initial={{ x: '10%' }}
            whileInView={{ x: '0%' }}
            transition={transition}>
            I am a married man with two lovely kids. I don&apos;t usually go out, 2 bottles of beer in my home office would satify my day. I&apos;m now becoming a boring person and would rather spend the rest of my time in front of the PC than goofing around and travel the world. I&apos;m a witty person and I do ask stupid questions sometimes.</motion.p>
        </div>
        <div className="img-big">

        </div>
      </div>
      <div className="image-cards">
        {me.map(image => (
          <div key={image.id} className="card">
            <img src={image.src} alt={image.name} />
          </div>
        ))}
      </div>
      <Link className="btn btn-primary" to="gallery" spy={true} smooth={true} duration={800} >
        Timeline <FaArrowDown size={24} />
      </Link>
    </Element>
  );
};

export default About;
