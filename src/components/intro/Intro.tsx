import { useTypewriter } from 'react-simple-typewriter';
import { animateScroll as scroll, Link } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion';

import "./intro.scss";

const Intro = () => {
  const { text } = useTypewriter({
    words: ['Frontend ', 'Backend', 'Sitecore', 'Azure'],
    loop: 0,
  });

  return (
    <div className="intro">
      <div className="left">
        <div className="social-container">
          <ul>
            <li>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3, type: "spring" }}
                href="#" target="_blank"><FaGithub size={40} color="#ffd717" /></motion.a>
            </li>
            <li>
              <motion.a initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 5, type: "spring" }}
                href="#" target="_blank"><FaLinkedin size={40} color="#ffd717" /></motion.a>
            </li>
            <li>
              <motion.a initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 7, type: "spring" }}
                href="#" target="_blank"><FaTwitter size={40} color="#ffd717" /></motion.a>
            </li>
          </ul>
        </div>
        <div className="intro-text">
          <h2>Hi there!</h2>
          <h1>
            I am
            <motion.span
              animate={{
                rotate: 360
              }}
              transition={{ duration: 3.5, type: "spring" }} className="myName">
              Lester
            </motion.span>
          </h1>
          <h3>
            <span className="typed-elem">
              {text}</span> Developer
          </h3>
        </div>

        <div className="button-container">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => null}>
            <Link to="whoami" spy={true} smooth={true} duration={800} >Know more about me...</Link>
          </motion.button>
        </div>
      </div>
      <div className="right">
        {/* <div className="img-container">
          <img src="assets/github_image2.png" alt="Lester" />
        </div> */}
      </div>
    </div>
  );
};

export default Intro;