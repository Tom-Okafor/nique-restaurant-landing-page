import { useEffect } from "react";
import HeadText from "./components/head-text";
import { restaurantImages } from "./constants";

export default function Restaurant() {
  useEffect(() => {
    console.log(document.querySelector(".check").scrollHeight);
    const section = document.querySelector(".check");

    section.addEventListener("mouseover", handleScroll);
    function handleScroll() {
      console.log(section.scrollTop);
    }
    return () => {
      section.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="w-full min-h-dvh relative bg-default-bg h-[600vw] check">
      <HeadText />
      <ul className="z-10 top-0 h-dvh fixed flex translate-x-[0] restaurant-image-slider">
        {restaurantImages.map((restaurantImage, index) => (
          <li key={index} className="h-dvh w-[50vw]">
            <img
              src={restaurantImage.src}
              alt={restaurantImage.alt}
              className="w-full h-full object-cover object-bottom"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
