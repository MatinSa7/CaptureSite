import React from "react";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  pageAnimation,
  slider,
  fade,
  photoAnim,
  lineAnim,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #1b1b1b;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #3500d3;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #0C0032;
  z-index: 1;
`;

const Frame2 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #190061;
  z-index: 1;
`;

const Frame3 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #240090;
  z-index: 1;
`;

const Frame4 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #3500D3;
  z-index: 1;
`;

export default OurWork;
