import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyled
      style={{ backgroundColor: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
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

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
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
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default ContactUs;
