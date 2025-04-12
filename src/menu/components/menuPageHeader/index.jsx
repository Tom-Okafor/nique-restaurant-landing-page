import { menuPageNavItems } from "../../constants";
import clsx from "clsx";

export default function MenuPageHeader() {
  const currentSection = 0;
  return (
    <header className="w-full flex justify-center items-center">
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
          >
            {navItem.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
