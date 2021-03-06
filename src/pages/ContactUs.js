import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <ContactStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <SocialStyled variants={titleAnim}>
            <Circle />
            <h2>Send us a Message</h2>
          </SocialStyled>
        </Hide>
        <Hide>
          <SocialStyled variants={titleAnim}>
            <Circle />
            <h2>Send an Email</h2>
          </SocialStyled>
        </Hide>
        <Hide>
          <SocialStyled variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </SocialStyled>
        </Hide>
      </div>
    </ContactStyled>
  );
};

const SocialMedia = styled.div`

`

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
    h2 {
      font-size: 2rem;
    }
  }
`;

const Title = styled.div`
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
  h2 {
    font-size: 4rem;
    color: #3500d3;
  }
  font-weight: lighter;
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const SocialStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 3rem;
    color: white;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;

export default ContactUs;
