import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../Styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={scrollReveal}
      animate={controls}
      initial={"hidden"}
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <embed src={clock} alt="clock" />
              <h3>efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <embed src={teamwork} alt="teamwork" />
              <h3>teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>

          <StyledCard>
            <div className="icon">
              <embed src={diaphragm} alt="diaphragm" />
              <h3>diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <embed src={money} alt="money" />
              <h3>affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <embed src={home2} alt="camera" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  @media (max-width: 1300px) {
    justify-content: center;
  }
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      color: white;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;
