import HeadText from "./components/head-text";
import { restaurantImages } from "./constants";

export default function Restaurant() {
  return (
    <section className="w-full min-h-screen overflow-x-hidden relative bg-default-bg h-[600vw]">
      <HeadText />
      <ul className="z-10 top-0 h-dvh fixed flex translate-x-[0] restaurant-image-slider">
        {restaurantImages.map((restaurantImage, index) => (
          <li key={index} className="h-dvh w-[50vw]">
            <img
              src={restaurantImage.src}
              alt={restaurantImage.alt}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
