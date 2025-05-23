import { useContext } from "react";
import { menuPageNavItems } from "../../constants";
import { CurrentSectionContext } from "../../context";
import clsx from "clsx";
import { handleMenuListNavigation } from "../../utils/handleScrollToSection";

export default function MenuPageHeader() {
  const { currentSection, setCurrentSection } = useContext(
    CurrentSectionContext
  );
  const scrollToSection = (id, index, evt) => {
    evt.preventDefault();
    if (currentSection !== index) {
      setCurrentSection(index);
      handleMenuListNavigation(id);
    }
  };
  return (
    <header className="w-full flex justify-center items-center sticky top-0 backdrop-blur-sm backdrop-saturate-200 backdrop-contrast-200 z-30">
      <nav className="flex items-center gap-[clamp(18px,2.857vw,48px)] py-6 px-[clamp(16px,1.905vw,32px)]">
        {menuPageNavItems.map((navItem, index) => (
          <a
            href={navItem.link}
            key={index}
            className={clsx(
              "font-Chillax-regular text-default-size",
              currentSection === index
                ? "text-primary"
                : "text-muted hover:text-default duration-300"
            )}
            onClick={(event) => {
              scrollToSection(navItem.link, index, event);
            }}
          >
            {navItem.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
