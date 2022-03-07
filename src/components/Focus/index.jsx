import React from "react";
import Icon3 from "../../images/svg-3.svg";
import Card from "../card/Card";
import { FocusContainer, FocusH1, FocusWrapper } from "./FocusElements";

const Focus = () => {
  return (
    <FocusContainer id="services">
      <FocusH1>Our focus</FocusH1>
      <FocusWrapper>
        <Card
          card={{
            cardTitle: "Market disruption",
            cardDisc: "Companies that can grow at least twice a year.",
            cardImgAttributes: {
              src: "../../images/market-disruption.svg",
              loading: "lazy",
              alt: "Market disruption Francon Capital",
            },
          }}
        />
        <Card
          card={{
            cardTitle: "Vertical integration",
            cardDisc: "Companies with a clear monetization model.",
            cardImgAttributes: {
              src: "../../images/vertical_integration.svg",
              loading: "lazy",
              alt: "Vertical integration Francon Capital",
            },
          }}
        />
        <Card
          card={{
            cardTitle: "Organic growth",
            cardDisc: "Companies that have proven their business models.",
            cardImgAttributes: {
              src: "../../images/organic_growth.svg",
              loading: "lazy",
              alt: "Organic growth Francon Capital",
            },
          }}
        />
      </FocusWrapper>
    </FocusContainer>
  );
};

export default Focus;
