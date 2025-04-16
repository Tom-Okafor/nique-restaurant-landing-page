import PageTitle from "../common/components/page-title";

export default function Contact() {
  return (
    <section className="bg-default-bg flex">
      <aside>
        <PageTitle
          width="50vw"
          subText="Contact"
          mainText="Get in Touch"
          image="url('reservation.png')"
        />
      </aside>
    </section>
  );
}
