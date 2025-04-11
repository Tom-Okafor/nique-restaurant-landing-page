import { AnimatedText } from "../../../common/components/animated-text";
import Logo from "../../../common/components/logo";
import Menu from "../../../common/components/nav";

export default function MenuTitle() {
  return (
    <section className="w-1/2 h-screen bg-default-bg py-[6.4vh] flex flex-col items-center justify-between bg-[url('menu-main.png')] bg-cover bg-no-repeat">
      <Logo />
      <div className="text-center my-auto">
        <h1 className="text-heading-medium-italic text-primary font-bitter-rose animate-shrink-text-no-delay">
          check out
        </h1>
        <h1 className="capitalize text-heading-medium text-default font-Chillax-medium overflow-hidden flex items-center gap-4 justify-center">
          <AnimatedText text={"our menus".split(" ")} delay={800} />
        </h1>
      </div>
      <Menu />
    </section>
  );
}
