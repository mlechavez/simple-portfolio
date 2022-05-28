import { Element, animateScroll as scroll } from "react-scroll";
import BrowserCard from "../common/browserCard/BrowserCard";
import PageTitle from "../common/PageTitle";
import { portfolios } from "./data";

import "./portfolio.scss";

const Portfolio = () => {

  return (
    <Element className="portfolio h-100" name="portfolio">
      <div className="wrapper">
        <PageTitle title="Learn & Inspire." subtitle="I have no special talent. I'm just passionately curious" />
        <div className="browser-card-list">
          {portfolios.map(portfolio => <BrowserCard key={portfolio.id} img={portfolio.img} link={portfolio.link} />)}
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
