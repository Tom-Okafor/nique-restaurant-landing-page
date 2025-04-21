import Footer from "../../../common/components/footer";
import ShopList from "../shop-list";

export default function ShopBlock() {
  return (
    <section className="w-[50vw] flex flex-col gap-12 items-center py-24">
      <ShopList />
      <Footer />
    </section>
  );
}
