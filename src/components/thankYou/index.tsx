import { Element, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./thanksYou.scss";

const ThankYou = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <Element className="thankYou h-100" name="thankYou">
      <div className="container">
        <header>
          <motion.h2
            initial={{ x: "10%" }}
            whileInView={{ x: "0%" }}
            transition={transition}
          >
            Thank you!
          </motion.h2>
          <motion.p
            initial={{ x: "-10%" }}
            whileInView={{ x: "0%" }}
            transition={transition}
          >
            Forget all reasons why it won&apos;t work and believe the one reason
            why it will
          </motion.p>
        </header>
        <motion.img
          animate={{
            rotate: 720,
          }}
          transition={{ duration: 3.5, type: "spring" }}
          src="assets/github_image.png"
          alt="Mark Lester Echavez"
        />
        <div className="social-container">
          <ul>
            <li>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3, type: "spring" }}
                href="https://github.com/mlechavez"
                target="_blank"
              >
                <FaGithub size={32} />
                https://github.com/mlechavez
              </motion.a>
            </li>
            <li>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 5, type: "spring" }}
                href="https://linkedin.com/in/mlechavez"
                target="_blank"
              >
                <FaLinkedin size={32} />
                https://linkedin.com/in/mlechavez
              </motion.a>
            </li>
            <li>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 7, type: "spring" }}
                href="https://twitter.com/mlaechavez"
                target="_blank"
              >
                <FaTwitter size={32} />
                https://twitter.com/mlaechavez
              </motion.a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => scroll.scrollToTop()}
        >
          <FaArrowUp size={24} />
        </button>
      </div>
    </Element>
  );
};

export default ThankYou;
