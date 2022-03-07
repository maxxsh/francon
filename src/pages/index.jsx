import React, { useState } from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Focus from "../components/Focus";
import Sidebar from "../components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} showMenu={true} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Focus />
      <Info {...homeObjThree} />
    </>
  );
};

export default Home;
