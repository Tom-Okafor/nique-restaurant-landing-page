import React from "react";
import Logo from "../common/components/logo";
import HeroText from "./components/HeroText";
import Menu from "../common/components/nav";
const HomePage = () => {
  return (
    <section className="w-full min-h-screen bg-[#050505] flex flex-col justify-between py-[6.4vh] items-center relative">
      <div className="absolute inset-0 top-0 bg-[url(/homepage.png)] animate-background-shift"></div>
      <Logo margin="" />
      <HeroText />
      <Menu />
    </section>
  );
};

export default HomePage;
