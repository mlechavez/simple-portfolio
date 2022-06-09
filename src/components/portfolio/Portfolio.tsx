import { FaArrowDown } from "react-icons/fa";
import { Element, Link } from "react-scroll";
import { motion } from 'framer-motion';
import BrowserCard from "../common/browserCard/BrowserCard";

import { portfolios } from "./data";

import "./portfolio.scss";

const Portfolio = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <Element className="portfolio h-100" name="portfolio">
      <div className="container">
        <header>
          <motion.h2
            initial={{ x: "10%" }}
            whileInView={{ x: "0%" }}
            transition={transition}>
            Learn &amp; Inspire
          </motion.h2>
          <motion.p
            initial={{ x: "-10%" }}
            whileInView={{ x: "0%" }}
            transition={transition}>
            I have no special talent, I am just passionately curious
          </motion.p>
        </header>
        <div className="browser-card-list">
          {portfolios.map(portfolio => <BrowserCard key={portfolio.id} img={portfolio.img} link={portfolio.link} />)}
        </div>
        <Link className="btn btn-primary" to="thankYou" spy={true} smooth={true} duration={800} >
          gamsahabnida <FaArrowDown size={24} />
        </Link>
      </div>
    </Element>
  );
};

export default Portfolio;
