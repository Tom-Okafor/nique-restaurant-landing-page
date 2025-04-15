import MenuBlock from "./components/menu-block";
import PageTitle from "../common/components/page-title";
export default function MenuPage() {
  return (
    <section className="bg-default-bg flex">
      <aside>
        <PageTitle width="50vw" subText="Check Out" mainText="Our Menus" />{" "}
      </aside>
      <MenuBlock />
    </section>
  );
}
