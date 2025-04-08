import PropTypes from "prop-types";

export default function MenuDropDown() {
  return (
    <section className="absolute rounded-[10px] w-[150px] mini:w-[clamp(200px,14.881vw,250px)] flex-col gap-[0.8vh] bg-default py-[min(16px,1.6vh)] px-[min(24px,1.429vw)] left-[23.81vw] bottom-[9vh] animate-appear-dropdown">
      <h6 className="text-inverse font-Chillax-regular">Opening Hours</h6>
      <ul className="flex flex-col gap-[min(8px,0.8vh)] w-full">
        <li className="w-full flex justify-between">
          <span className="text-default-size font-Chillax-medium text-inverse">
            Mon
          </span>
          <span className="text-default-size font-Chillax-light">Closed</span>
        </li>
        <li className="w-full flex justify-between">
          <span className="text-default-size font-Chillax-medium text-inverse">
            Tue - Fri
          </span>
          <span className="text-default-size font-Chillax-light">
            4pm - 8pm
          </span>
        </li>
        <li className="w-full flex justify-between">
          <span className="text-default-size font-Chillax-medium text-inverse">
            Sat- Sun
          </span>
          <span className="text-default-size font-Chillax-light">
            5pm - 11pm
          </span>
        </li>
      </ul>
    </section>
  );
}
