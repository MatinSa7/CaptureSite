import React, { useState } from "react";
import styled from "styled-components";
import { StyledAbout } from "../Styles";
import Toggle from "../components/Toggle";

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

const FaqSection = () => {
  return (
    <>
      <StyledFaq>
        <h2>
          Any Questions? <span>FAQ</span>
        </h2>
        <Toggle>
          <div className="question">
            <h4>How do I start?</h4>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                atque.
              </p>
            </div>
            <div className="faq-line"></div>
          </div>
        </Toggle>
        <div className="question">
          <h4>Daily schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              atque.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Different payment methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              atque.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What products do you offer?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              atque.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </StyledFaq>
    </>
  );
};

export default FaqSection;
