import MenuBlock from "./components/menu-block";
import MenuTitle from "./components/menu-title";
export default function MenuPage() {
  return (
    <section className="bg-default-bg flex">
      <aside>
        <MenuTitle />
      </aside>
      <MenuBlock />
    </section>
  );
}
