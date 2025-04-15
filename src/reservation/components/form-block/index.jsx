import Form from "../form";

export default function FormBlock() {
  return (
    <section className="w-[50vw] h-screen flex justify-center items-center">
      <section className="flex flex-col gap-[min(48px,4.8vh)] w-[min(33.33vw,560px)]">
        <section className="space-y-4">
          <h2 className="font-Chillax-medium text-default">Book a Table</h2>
          <p className="text-large text-muted font-Chillax-light max-w-prose">
            Our dining atmosphere is casual and comfortable. To reflect this
            environment, we maintain a formal dress.
          </p>
        </section>
        <Form />
      </section>
    </section>
  );
}
