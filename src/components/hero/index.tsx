import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import "./hero.scss";

const Hero = () => {
  const { text } = useTypewriter({
    words: ["Frontend ", "Backend", "Sitecore", "Azure"],
    loop: 0,
  });

  return (
    <div className="hero h-100">
      <h3>
        <span>Hey there, I'm</span>
        <motion.span
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 3.5, type: "spring" }}
          className="myName"
        >
          Lester
        </motion.span>
      </h3>
      <h1>
        <span className="typed-elem">{text}</span> Developer
      </h1>
      <p>
        I am the Lead of the Custom App pod. We are composed of 5 different
        projects. I help the team grow by supporting them and provide the right
        trainings and advices.
      </p>
      <motion.button className="btn btn-primary" onClick={() => null}>
        <Link to="about" spy={true} smooth={true} duration={800}>
          Know more about me <FaArrowDown size={24} />
        </Link>
      </motion.button>
    </div>
  );
};

export default Hero;
