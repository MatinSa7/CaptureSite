import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/CaptureSite/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/CaptureSite/">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/CaptureSite/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/Work">Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/Work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/Contact" ? "50%" : "0%" }}
          />
        </li>
        
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    margin-left: 1rem;
    font-size: 2.75rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0rem;
    }
  }
`;

const Line = styled(motion.div)`
  @media (max-width: 1300px) {
    left: 0%;
  }
  height: 0.3rem;
  background: #3500d3;
  width: 0;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;

export default Nav;
