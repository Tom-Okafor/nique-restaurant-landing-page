import Logo from "../../../common/components/logo";
import Menu from "../../../common/components/nav";

export default function MenuTitle() {
  return (
    <section className="w-1/2 h-screen bg-default-bg py-[64px] flex flex-col items-center justify-between bg-[url('menu-main.png')] bg-cover bg-no-repeat">
      <Logo />
      <div className="text-center my-auto">
        <h1 className="text-heading-medium-italic text-primary font-bitter-rose">
          check out
        </h1>
        <h1 className="capitalize text-heading-medium text-default font-Chillax-medium">
          our menus
        </h1>
      </div>
      <Menu />
    </section>
  );
}
