import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
//framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "../components/Wave";

import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../Styles";

const AboutSection = () => {
  return (
    <StyledAbout className="about">
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
      <StyledImage className="image">
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
