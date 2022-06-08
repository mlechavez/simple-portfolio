import "./topbar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Topbar = () => {
  const transition = { duration: 3, type: 'spring' };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <div className="topbar">
      <div className="container">
        <div className="left">
          <div className="brand" onClick={() => scroll.scrollToTop()}>
            <motion.div className="sp1"
              initial={{ x: '-70%' }}
              whileInView={{ x: '0%' }}
              transition={transition}
            >
              develo
            </motion.div>
            <motion.div
              initial={{ x: '+70%' }}
              whileInView={{ x: '0%' }}
              transition={transition}
              className="sp2">
              ter
            </motion.div>
          </div>
        </div>
        <div className="center">
          <motion.div className="menu"
            initial={{ y: '+100%' }}
            whileInView={{ y: '0%' }}
            transition={transition}
          >
            <motion.ul variants={container} initial="hidden" animate="show">
              <motion.li variants={item}>
                <Link to="about" spy={true} smooth={true} duration={800}>
                  about
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="gallery" spy={true} smooth={true} duration={800}>
                  timeline
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="usedToDo" spy={true} smooth={true} duration={800}>
                  used to do
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="portfolio" spy={true} smooth={true} duration={800}>
                  portfolio
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        <div className="right">
          <ul>
            <li>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3, type: "spring" }}
                href="https://github.com/mlechavez" target="_blank"><FaGithub size={32} /></motion.a>
            </li>
            <li>
              <motion.a initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 5, type: "spring" }}
                href="https://linkedin.com/in/mlechavez" target="_blank"><FaLinkedin size={32} /></motion.a>
            </li>
            <li>
              <motion.a initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 7, type: "spring" }}
                href="https://twitter.com/mlaechavez" target="_blank"><FaTwitter size={32} /></motion.a>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Topbar;
