import Logo from "../../../common/components/logo";
import Menu from "../../../common/components/nav";

export default function HeadText() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-between py-16 z-20 fixed top-0">
      <Logo />
      <div className="text-center relative">
        <div className="text-block-one">
          <p className="text-heading-medium-italic text-primary font-bitter-rose font-[500] capitalize animate-shrink-text-no-delay">
            discover
          </p>
          <h1 className="text-heading-xlarge text-default font-Chillax-medium animate-scale-text">
            nique.
          </h1>
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] text-block-two">
          <p className="text-heading-medium-italic text-primary font-bitter-rose font-[500] animate-shrink-text">
            experience delight
          </p>
          <h1 className="text-heading-xlarge text-default font-Chillax-medium animate-scale-text">
            nique.
          </h1>
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] text-block-three">
          <p className="text-heading-medium-italic text-primary font-bitter-rose font-[500] animate-shrink-text-no-delay">
            explore the exquisite
          </p>
          <h1 className="text-heading-xlarge text-default font-Chillax-medium animate-scale-text">
            nique.
          </h1>
        </div>
      </div>
      <Menu />
    </section>
  );
}
