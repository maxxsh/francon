import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLink,
  FooterNotLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/" onClick={toggleHome}>
                About
              </FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/contact">Get Funded</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Partners</FooterLinkTitle>
              <FooterNotLink to="/">Francon Group</FooterNotLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Legal</FooterLinkTitle>
              <FooterLink to="/privacy" onClick={toggleHome}>
                Privacy Policy
              </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Francon Capital
            </SocialLogo>
            <WebsiteRights>
              Francon Capital © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            {/* <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/leonardtcomdt/"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber"
                target="_blank"
                arial-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/leonardtlauenstein/"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
