import { AnimatedText } from "../../common/components/animated-text";
export default function HeroText() {
  return (
    <section className="flex flex-col gap-[clamp(16px,3.2vh,32px)] items-center my-auto z-10 mb-[20.8vh]">
      <h1 className="flex flex-col items-center">
        <span className="text-primary text-heading-medium-italic font-normal font-bitter-rose flex overflow-y-hidden gap-4 leading-[100%]">
          <AnimatedText text={"The pure taste of".split(" ")} delay={0} />
        </span>
        <span className="text-default font-Chillax-medium text-heading-xlarge animate-scale-text">
          Thailand
        </span>
      </h1>
      <p className="font-Chillax-regular text-default text-xlarge text-center max-w-[300px] md:max-w-[35.7vw] animate-shrink-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </section>
  );
}
