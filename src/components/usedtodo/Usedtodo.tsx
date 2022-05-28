import { Element } from "react-scroll";
import ChevronDown from '../common/chevronDown/ChevronDown';


import "./usedtodo.scss";

type UsedtodoProps = {
  element: string;
  videoSrc: string;
  navigateTo: string;
  title: string;
  subtitle: string;
  desc: string;
}

const Usedtodo = ({ element, title, subtitle, desc, videoSrc, navigateTo }: UsedtodoProps) => {
  return (
    <Element className="usedToDo h-100" name={element}>
      <div className="wrapper">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{desc}</p>
        <ChevronDown navigateTo={navigateTo} color="white" size={30} blinking />
        <video autoPlay muted loop className="video1-bg">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </Element>
  );
};

export default Usedtodo;
