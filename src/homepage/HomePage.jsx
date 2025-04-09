import React, { useState} from "react";
import Logo from "../common/components/logo";
import MenuBar from "../common/components/menuBar";
import MenuDropDown from "../common/components/menuDropDown";
import HeroText from "./components/HeroText";

const HomePage = () => {
  const [isDropDownVisible, setDropDownVisibility] = useState(false);
  const handleBookTableButtonMouseOver = () => {
    setDropDownVisibility(true);
  };
  const handleBookTableButtonMouseOut = () => {
    setDropDownVisibility(false);
  };
  return (
    <section className="w-full min-h-screen bg-[#050505] flex flex-col py-[6.4vh] items-center relative">
      <div className="absolute inset-0 top-0 bg-[url(/homepage.png)] animate-background-shift"></div>
      <Logo />
      <HeroText />
      <section className="px-[0.595vw] py-[1vh] flex items-center rounded-full bg-default z-20 relative animate-scale-delay">
        <MenuBar
          handleBookTableButtonMouseOut={handleBookTableButtonMouseOut}
          handleBookTableButtonMouseOver={handleBookTableButtonMouseOver}
        />
        {isDropDownVisible && <MenuDropDown />}
      </section>
    </section>
  );
};

export default HomePage;
