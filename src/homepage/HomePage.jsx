import React, { useState } from "react";

const buttonClasses =
  "px-[clamp(14px,0.953vw,16px)] py-[min(16px,1.6vh)] rounded-full bg-default text-inverse text-default-size capitalize font-Chillax-medium hover:bg-primary duration-300";
const HomePage = () => {
  const [isDropDownVisible, setDropDownVisibility] = useState(false);
  return (
    <section className="w-full min-h-screen bg-[#050505] flex flex-col py-[6.4vh] items-center relative">
      <div className="absolute inset-0 left-[13.75vw] top-0 bg-[url(/homepage.png)] bg-cover"></div>
      <h3 className="font-[Chillax-medium] text-white z-10 mb-[24.5vh]">
        nique.
      </h3>
      <section className="flex flex-col gap-[clamp(16px,3.2vh,32px)] items-center my-auto z-10 mb-[20.8vh]">
        <h1 className="flex flex-col items-center">
          <span className="text-primary text-heading-medium-italic font-normal font-bitter-rose">
            The pure taste of{" "}
          </span>
          <span className="text-default font-Chillax-medium text-heading-xlarge">
            Thailand
          </span>
        </h1>
        <p className="font-Chillax-regular text-default text-xlarge text-center max-w-[300px] md:max-w-[35.7vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </section>
      <section className="px-[0.595vw] py-[1vh] flex items-center rounded-full bg-default z-20 relative">
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
            <button className={buttonClasses}>menu</button>
            <button className={buttonClasses}>restaurant</button>
            <button className={buttonClasses}>classes</button>
          </div>
          <button
            className="uppercase rounded-full text-default font-Chillax-medium tracking-[1px] text-sm leading-[100%] bg-[#111111] hover:bg-primary hover:text-inverse px-[clamp(16px,1.429vw,24px)] py-[min(16px,1.6vh)] duration-300"
            onMouseOver={() => {
              setDropDownVisibility(true);
            }}
            onMouseOut={() => {
              setDropDownVisibility(false);
            }}
          >
            book a table
          </button>
        </div>
        <section className="absolute rounded-[10px] w-[min(14.881vw,250px)] flex-col gap-[0.8vh] bg-default py-[min(16px,1.6vh)] px-[min(24px,1.429vw)] left-[23.81vw] bottom-[9vh]" style={{display: isDropDownVisible ? 'flex' : 'none'}}>
          <h6 className="text-inverse font-Chillax-regular">Opening Hours</h6>
          <ul className="flex flex-col gap-[min(8px,0.8vh)] w-full">
            <li className="w-full flex justify-between">
              <span className="text-default-size font-Chillax-medium text-inverse">
                Mon
              </span>
              <span className="text-default-size font-Chillax-light">
                Closed
              </span>
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
      </section>
    </section>
  );
};

export default HomePage;
