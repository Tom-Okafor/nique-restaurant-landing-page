import { MenuList } from "../menu-list";
import MenuPageHeader from "../menuPageHeader";
import { CurrentSectionContext } from "../../context";
import { useEffect, useState } from "react";
import { setCurrentMenuListSection } from "../../utils/menuListScrollHandler";
export default function MenuBlock() {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollHandler = () => {
    const newSection = setCurrentMenuListSection(currentSection);
    newSection !== currentSection && setCurrentSection(newSection);
  };
  useEffect(() => {
    window.addEventListener("resize", scrollHandler);

    return () => {
      window.removeEventListener("resize", scrollHandler);
    };
  });

  return (
    <section
      className="w-full h-screen overflow-auto scroll-smooth"
      id="menu-block"
      onScroll={scrollHandler}
    >
      <CurrentSectionContext.Provider
        value={{ currentSection, setCurrentSection }}
      >
        <MenuPageHeader />
        <MenuList />
      </CurrentSectionContext.Provider>
    </section>
  );
}
