import ContactForm from "../contact-form";

export default function ContactBlock() {
  return <section className="w-[50vw] px-[min(4.762vw,80px)] py-[min(9.6vh,96px)] flex flex-col gap-[clamp(32px,4.8vh,48px)] overflow-auto">
    <p className="font-Chillax-regular text-large text-muted2">
      Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.
      Arcu non odio euismod lacinia. Tortor aliquam nulla facilisi cras
      fermentum odio eu.
    </p>
    <ContactForm />
  </section>;
}
