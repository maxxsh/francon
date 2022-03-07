import React, { useState } from "react";
import { Button } from "../ButtonElements";
import { ArrowForward, ArrowRight } from "../Hero/HeroElements";
import { NavBtnLink } from "../Navbar/NavbarElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  attributes,
  primary,
  dark,
  dark2,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {/* <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button> */}
                  {buttonLabel ? (
                    <NavBtnLink
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
                      {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                    </NavBtnLink>
                  ) : (
                    ""
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img {...attributes} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
