import Logo from "../common/components/logo";
import Menu from "../common/components/nav.jsx";
import { classBlocks } from "./constants/index.js";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Classes() {
  return (
    <main className="min-h-dvh h-[400vw]  bg-default-bg">
      <section className="w-full flex flex-col items-center justify-between h-dvh py-16 fixed top-0 z-20">
        <Logo />
        <Menu />
      </section>
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
    </main>
  );
}
