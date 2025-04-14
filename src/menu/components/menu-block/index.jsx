import { MenuList } from "../menu-list";
import MenuPageHeader from "../menuPageHeader";
export default function MenuBlock() {
  return (
    <section className="w-full h-screen overflow-auto scroll-smooth">
      <MenuPageHeader />
      <MenuList />
    </section>
  );
}
