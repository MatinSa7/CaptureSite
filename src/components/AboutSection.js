import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
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
        <div className="title">
          <StyledHide className="hide">
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide className="hide">
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage className="image">
        <img src={home1} alt="Guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
