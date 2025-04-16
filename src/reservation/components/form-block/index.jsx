import Form from "../form";

export default function FormBlock() {
  return (
    <section className="w-[50vw] px-[min(4.762vw,80px)] py-[min(9.6vh,96px)] flex flex-col gap-[clamp(32px,4.8vh,48px)] overflow-auto">
      <section className="space-y-4">
        <h2 className="font-Chillax-medium text-default">Book a Table</h2>
        <p className="text-large text-muted font-Chillax-light max-w-prose">
          Our dining atmosphere is casual and comfortable. To reflect this
          environment, we maintain a formal dress.
        </p>
      </section>
      <Form />
    </section>
  );
}
