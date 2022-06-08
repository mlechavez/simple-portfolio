import { FaArrowDown } from "react-icons/fa";
import { Element, Link } from "react-scroll";

import "./usedtodo.scss";

type UsedtodoProps = {
  element: string;
  videoSrc: string;
  navigateTo: string;
  title: string;
  subtitle: string;
  desc: string;
  buttonText: string;
}

const Usedtodo = ({ element, title, subtitle, desc, videoSrc, navigateTo, buttonText }: UsedtodoProps) => {
  return (
    <Element className="usedToDo h-100" name={element}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{desc}</p>
      <Link className="btn btn-primary" to={navigateTo} spy={true} smooth={true} duration={800} >
        {buttonText} <FaArrowDown size={24} />
      </Link>
      <video autoPlay muted loop className="video1-bg">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Element>
  );
};

export default Usedtodo;
