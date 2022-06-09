import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import { me } from "./data";
import "./about.scss";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <Element className="about h-100" name="about">
      <div className="container">
        <div className="about-me">
          <div className="left">
            <div className="wrapper">
              <motion.h3
                initial={{ x: "-70%" }}
                whileInView={{ x: "0%" }}
                transition={transition}
              >
                I&apos;m Mark Lester Echavez.
              </motion.h3>

              <motion.p
                initial={{ x: "10%" }}
                whileInView={{ x: "0%" }}
                transition={transition}
              >
                I was born in Makati, but moved in Laguna. I am married with two
                lovely kids. I graduated in college with{" "}
                <i>BS Computer Engineering</i>. I don&apos;t have any travel
                adventures at the moment and hoping to have one soon but I&apos;m
                now becoming a boring person and would rather spend the rest of my
                time in front of the PC than goofing around and travel the world.
                I&apos;m a witty person and I do ask stupid questions sometimes.
              </motion.p>
            </div>
          </div>
          <div className="right">
            <motion.div className="fun-fact">
              <h6>Fun Fact.</h6>
              <motion.p
                initial={{ x: "10%" }}
                whileInView={{ x: "0%" }}
                transition={transition}
              >
                He was a Civil engineering student at Mapua Intramuros. During
                his major years, He realized that this course was not for him so
                he stopped and later transferred to University of Perpetual Help
                as a Computer engineering student.
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="image-cards">
          {me.map((image) => (
            <motion.div
              key={image.id}
              className="card"
              initial={image.id % 2 === 0 ? { y: "-20%" } : { y: "20%" }}
              whileInView={{ y: "0%" }}
              transition={transition}
            >
              <img src={image.src} alt={image.name} />
            </motion.div>
          ))}
        </div>
      </div>

      <Link
        className="btn btn-primary"
        to="gallery"
        spy={true}
        smooth={true}
        duration={800}
      >
        Timeline <FaArrowDown size={24} />
      </Link>
    </Element>
  );
};

export default About;
