import Logo from "./logo";
import Menu from "./nav";
import { AnimatedText } from "./animated-text";

export default function PageTitle({ width, mainText, subText, image }) {
  return (
    <section
      className="h-screen bg-default-bg py-[6.4vh] flex flex-col items-center justify-between bg-cover bg-no-repeat"
      style={{ width, backgroundImage: image, backgroundSize: '50vw 100%' }}
    >
      <Logo />
      <div className="text-center my-auto">
        <h1 className="text-heading-medium-italic text-primary font-bitter-rose animate-shrink-text-no-delay">
          {subText}
        </h1>
        <h1 className="capitalize text-heading-medium text-default font-Chillax-medium overflow-hidden flex items-center gap-4 justify-center">
          <AnimatedText text={mainText.split(" ")} delay={500} />
        </h1>
      </div>
      <Menu />
    </section>
  );
}
