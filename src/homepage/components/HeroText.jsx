export default function HeroText() {
  return (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </section>
  );
}
