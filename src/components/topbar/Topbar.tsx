import "./topbar.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from 'framer-motion';

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
      <div className="left">
        <div className="brand" onClick={() => scroll.scrollToTop()}>
          <motion.div className="sp1"
            initial={{ x: '-70%' }}
            whileInView={{ x: '0%' }}
            transition={transition}
          >
            develo
          </motion.div>
          <motion.span
            initial={{ x: '+70%' }}
            whileInView={{ x: '0%' }}
            transition={transition}
            className="sp2">
            ter
          </motion.span>
        </div>
      </div>
      <div className="right">
        <motion.div className="menu"
          initial={{ y: '+100%' }}
          whileInView={{ y: '0%' }}
          transition={transition}
        >
          <motion.ul variants={container} initial="hidden" animate="show">
            <motion.li variants={item}>
              <Link to="whoami" spy={true} smooth={true} duration={800}>
                Who am I
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link to="experience" spy={true} smooth={true} duration={800}>
                Work Experience
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link to="gallery" spy={true} smooth={true} duration={800}>
                Gallery
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link to="usedToDo" spy={true} smooth={true} duration={800}>
                Used to do
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link to="portfolio" spy={true} smooth={true} duration={800}>
                Portfolio
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div >
  );
};

export default Topbar;
