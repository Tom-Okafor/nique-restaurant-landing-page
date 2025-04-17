import Logo from "../common/components/logo";
import Menu from "../common/components/nav.jsx";

export default function Classes() {
  return (
    <main className="min-h-dvh h-[400vw] relative bg-default-bg flex justify-center">
      <section className="flex flex-col items-center justify-between h-dvh py-16 fixed top-0">
        <Logo />
        <Menu />
      </section>
    </main>
  );
}
