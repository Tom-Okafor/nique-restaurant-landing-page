import MenuBar from "./menuBar";
import MenuDropDown from "./menuDropDown";
import { useState } from "react";

export default function Menu() {
  const [isDropDownVisible, setDropDownVisibility] = useState(false);
  const handleBookTableButtonMouseOver = () => {
    setDropDownVisibility(true);
  };
  const handleBookTableButtonMouseOut = () => {
    setDropDownVisibility(false);
  };
  return (
    <section className="px-[0.595vw] py-[1vh] flex items-center rounded-full bg-default z-20 relative animate-scale-delay w-fit">
      <MenuBar
        handleBookTableButtonMouseOut={handleBookTableButtonMouseOut}
        handleBookTableButtonMouseOver={handleBookTableButtonMouseOver}
      />
      {isDropDownVisible && <MenuDropDown />}
    </section>
  );
}
