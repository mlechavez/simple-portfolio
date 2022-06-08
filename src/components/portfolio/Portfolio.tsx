import { FaArrowDown } from "react-icons/fa";
import { Element, Link } from "react-scroll";
import BrowserCard from "../common/browserCard/BrowserCard";

import { portfolios } from "./data";

import "./portfolio.scss";

const Portfolio = () => {

  return (
    <Element className="portfolio h-100" name="portfolio">
      <div className="container">
        <header>
          <h2>Learn &amp; Inspire</h2>
          <p>I have no special talent, I am just passionately curious</p>
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
