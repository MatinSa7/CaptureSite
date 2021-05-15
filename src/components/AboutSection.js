import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
//framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "../components/Wave";

import {
  StyledAboutBackground,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../Styles";

import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const AboutSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledAboutBackground
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>WE WORK TO MAKE</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              YOUR <span>DREAMS</span> COME
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>TRUE.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>

      <Wave />
    </StyledAboutBackground>
  );
};

export default AboutSection;

export const StyledImageBackground = styled.div`
  img {
    width: 80vh;
    height: 80vh;
    object-fit: cover;
  }
`;
