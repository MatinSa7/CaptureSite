import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
  background-size: contain;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledAboutBackground = styled(motion.div)`
  background-image: url(https://miro.medium.com/max/10944/1*AnkPF5SvLCuJxxsHL9IzWQ.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  position: relative;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: bold;
    z-index: 2;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 80vh;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
