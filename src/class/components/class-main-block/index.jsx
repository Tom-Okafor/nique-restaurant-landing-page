import ClassDescription from "./class-description";

export default function ClassMainBlock() {
  return (
    <main className="w-[50vw] py-24 flex flex-col items-center gap-20 scroll-auto">
      <section className="flex flex-col gap-20 w-[min(33.333vw,560px)]">
        <ClassDescription />
      </section>
      {/* FOOTER HERE */}
    </main>
  );
}
