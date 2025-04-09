import PropTypes from "prop-types";
import { buttonClasses } from "../constants";
import { NavLink } from "react-router-dom";

export default function MenuBar({
  handleBookTableButtonMouseOver,
  handleBookTableButtonMouseOut,
}) {
  return (
    <div className="flex gap-0.5 items-center">
      <div className="h-[4.8vh] max-h-12 w-[2.857vw] max-w-12 flex items-center justify-center">
        <img
          src="time-line.svg"
          alt="icon"
          aria-hidden="true"
          className="h-[2vh]"
        />
      </div>
      <div className="flex h-full items-center">
        <NavLink to="/menu" className={buttonClasses}>
          menu
        </NavLink>
        <NavLink to="/restaurant" className={buttonClasses}>
          restaurant
        </NavLink>
        <NavLink to="/classes" className={buttonClasses}>
          classes
        </NavLink>
      </div>
      <NavLink
        to="/reservation"
        className="uppercase rounded-full text-default font-Chillax-medium tracking-[1px] text-sm leading-[100%] bg-[#111111] hover:bg-primary hover:text-inverse px-[clamp(16px,1.429vw,24px)] py-[min(16px,1.6vh)] duration-300 cursor-pointer"
        onPointerOver={handleBookTableButtonMouseOver}
        onPointerOut={handleBookTableButtonMouseOut}
      >
        book a table
      </NavLink>
    </div>
  );
}

MenuBar.propTypes = {
  handleBookTableButtonMouseOut: PropTypes.func.isRequired,
  handleBookTableButtonMouseOver: PropTypes.func.isRequired,
};
