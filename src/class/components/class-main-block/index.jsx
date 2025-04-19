import ClassDescription from "./class-description";
import ClassDetails from "./class-details";
import ClassMenu from "./class-menu";

export default function ClassMainBlock() {
  return (
    <main className="w-[50vw] py-24 flex flex-col items-center gap-20 scroll-auto">
      <section className="flex flex-col gap-20 w-[min(33.333vw,560px)]">
        <ClassDescription />
        <ClassDetails />
        <ClassMenu />
      </section>
      {/* FOOTER HERE */}
    </main>
  );
}
