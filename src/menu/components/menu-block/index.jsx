import { MenuList } from "../menu-list";
import MenuPageHeader from "../menuPageHeader";
import { CurrentSectionContext } from "../../context";
import { useCallback, useEffect, useState } from "react";
import { setCurrentMenuListSection } from "../../utils/menuListScrollHandler";
export default function MenuBlock() {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollHandler = useCallback(() => {
    const newSection = setCurrentMenuListSection();
    setCurrentSection(newSection);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", scrollHandler);

    return () => {
      window.removeEventListener("resize", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <section
      className="w-full h-screen overflow-auto"
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
