import React from "react";
import Navbar from "../Navbar";
import { PlainPageContainer, PlainPageContent } from "./PlainPageElements";

const PlainPage = ({ children }) => {
  return (
    <>
      <Navbar showMenu={false} navClass="plain-page-nav" />
      <PlainPageContainer className="plain-page">
        <PlainPageContent>{children}</PlainPageContent>
      </PlainPageContainer>
    </>
  );
};

export default PlainPage;
