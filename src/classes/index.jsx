import { useState } from "react";
import Logo from "../common/components/logo";
import Menu from "../common/components/nav.jsx";
import { classBlocks } from "./constants/index.js";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Classes() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseOverText, setIsMouseOverText] = useState(false);

  const { x, y } = coordinates;

  const handlePointerMove = (event) => {
    const pointerSize = 100;
    const x = event.clientX - pointerSize / 2;
    const y = event.clientY - pointerSize / 2;
    setCoordinates({ x, y });
  };

  const handleMouseMove = (event) => {
    if (
      event.target.tagName === "H2" ||
      event.target.tagName === "P" ||
      event.target.tagName === "SPAN"
    ) {
      setIsMouseOverText(true);
    } else {
      setIsMouseOverText(false);
    }
  };
  return (
    <main
      className="min-h-dvh h-[400vw]  bg-default-bg"
      onPointerMove={handlePointerMove}
      onMouseOver={handleMouseMove}
    >
      <div className="fixed top-16 z-20 left-[50vw] translate-x-[-50%]">
        <Logo />
      </div>
      <div className="fixed bottom-16 z-20 left-[50vw] translate-x-[-50%]">
        <Menu />
      </div>
      <section className="flex h-dvh fixed classes-slider z-10">
        {classBlocks.map((block) => (
          <NavLink
            key={block.title}
            to="/classes"
            className="w-[34vw] h-dvh flex flex-col gap-2 items-center justify-center text-center bg-cover"
            style={{ backgroundImage: `url(${block.image})` }}
          >
            <h2 className="text-heading-medium-italic text-primary font-bitter-rose">
              {block.category}
            </h2>
            <h2 className="font-Chillax-medium text-default max-w-[12ch]">
              {block.title}
            </h2>
            <p className="text-default-size text-muted2 font-Chillax-light">
              {block.date}
            </p>
          </NavLink>
        ))}
      </section>
      <div
        className="size-[100px] flex justify-center items-center bg-primary-bg text-sm text-inverse font-Chillax-medium rounded-full uppercase fixed z-10 pointer-events-none duration-200 mix-blend-difference"
        style={{ top: `${y}px`, left: `${x}px` }}
      >
        <span className={clsx("duration-500", isMouseOverText ? "opacity-0" : "opacity-100")}>
          explore
        </span>
      </div>
    </main>
  );
}
