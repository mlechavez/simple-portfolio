import { Element } from "react-scroll";

import PageTitle from "../common/PageTitle";
import ChevronDown from "../common/chevronDown/ChevronDown";

import "./whoami.scss";

const Whoami = () => {

  return (
    <Element className="whoami h-100" name="whoami">
      <PageTitle title="about me" subtitle="Who am I?" />
      <div className="wrapper">
        <div className="left">
          <img src="assets/about_me.jpg" alt="" />
        </div>
        <div className="right">
          <p>I am Mark Lester Echavez. I graduated from UPSHL with BS Computer Engineering</p>

          <div className="highlight">
            <h4>More about me...</h4>
            <ul>
              <li>He's from Binan, Laguna</li>
              <li>A father of two</li>
              <li>A social drinker</li>
              <li>He spends the rest of his time in front of the PC.</li>
              <li>He does ask stupid questions sometimes. Well, that's how he learns.</li>
            </ul>
          </div>

          <ChevronDown navigateTo="experience" color="#ffd717" size={30} blinking />
        </div>
      </div>
    </Element>
  );
};

export default Whoami;
