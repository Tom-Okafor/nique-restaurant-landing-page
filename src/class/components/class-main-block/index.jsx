import ClassDescription from "./class-description";
import ClassDetails from "./class-details";
import ClassMenu from "./class-menu";
import ClassTeacher from "./class-teacher";
import Footer from "../../../common/components/footer";

export default function ClassMainBlock() {
  return (
    <main className="w-[50vw] py-24 flex flex-col items-center gap-20">
      <section className="flex flex-col gap-20 w-[min(33.333vw,560px)]">
        <ClassDescription />
        <ClassDetails />
        <ClassMenu />
        <ClassTeacher />
      </section>
      {/* FOOTER HERE */}
      <Footer />
    </main>
  );
}
