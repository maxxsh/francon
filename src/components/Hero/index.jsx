import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";
import AnimatedHero from "./AnimatedHero";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <AnimatedHero />
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Strong team with successful experience</HeroH1>
        <HeroP>
          Our partners are leading investors, business angels, successful
          entrepreneurs in all segments of the market.
        </HeroP>
        <HeroBtnWrapper>
          {/* <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}

          {/* <NavBtnLink
            to="/contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            // smooth={true}
            duration={500}
            // spy={true}
            exact="true"
            offset={-80}
          >
            Let's Connect {hover ? <ArrowForward /> : <ArrowRight />}
          </NavBtnLink> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
