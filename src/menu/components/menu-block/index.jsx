import { MenuList } from "../menu-list";
import MenuPageHeader from "../menuPageHeader";
import { CurrentSectionContext } from "../../context";
import { useState } from "react";
export default function MenuBlock() {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollHandler = () => {
    const scrollContainer = document.getElementById("menu-block");    
    const menuCategoryList = Array.from(
      document.querySelectorAll(".menu-category")
    );
    const categoryListTopPostition = menuCategoryList.map((category) =>
      Math.ceil(
        category.getBoundingClientRect().top + scrollContainer.scrollTop
      ) - 200
    );

    if (currentSection < categoryListTopPostition.length - 1)
      handleSectionChangeOnScrollUp();
    if (currentSection > 0) handleSectionChangeOnScrollDown();
    function handleSectionChangeOnScrollUp() {
      if (
        categoryListTopPostition[currentSection + 1] <= scrollContainer.scrollTop
      ) {
        console.log(typeof categoryListTopPostition[currentSection + 1]);
        
        
        setCurrentSection((prev) => ++prev);
        console.log("scrolling up");
        console.log(menuCategoryList[currentSection + 1]);
      }
    }
    function handleSectionChangeOnScrollDown() {
      if (
        categoryListTopPostition[currentSection] > scrollContainer.scrollTop
      ) {
        setCurrentSection((prev) => --prev);
        console.log("scrolling down");
        console.log(menuCategoryList[currentSection - 1]);
      }
    }
  };
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
