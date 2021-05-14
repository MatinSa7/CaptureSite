import React, { useState } from "react";
import styled from "styled-components";
import { StyledAbout } from "../Styles";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const StyledFaq = styled(StyledAbout)`
  background-image: url(https://images.unsplash.com/uploads/1412282232015a06e258a/4bdd2a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
  background-repeat: no-repeat;
  background-size: cover;
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
  const [element, controls] = useScroll();
  return (
    <>
      <StyledFaq
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h2>
          Any Questions? <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How do I start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                atque.
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                atque.
              </p>
            </div>
          </Toggle>
          <Toggle title="Different payment methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                atque.
              </p>
            </div>
          </Toggle>
          <Toggle title="What products do you offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                atque.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </StyledFaq>
    </>
  );
};

export default FaqSection;
