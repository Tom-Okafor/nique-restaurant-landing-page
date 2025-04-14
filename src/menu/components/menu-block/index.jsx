import { MenuList } from "../menu-list";
import MenuPageHeader from "../menuPageHeader";
export default function MenuBlock() {
  return (
    <section className="w-full h-screen overflow-auto">
      <MenuPageHeader />
      <MenuList />
    </section>
  );
}
