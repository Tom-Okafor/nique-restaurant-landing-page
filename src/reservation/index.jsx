import PageTitle from "../common/components/page-title";
import FormBlock from "./components/form-block";
export default function Reservation() {
  return (
    <section className="bg-default-bg flex">
      <aside>
        <PageTitle
          width="50vw"
          subText="Book A Table"
          mainText="Reservation"
          image="url('reservation.png')"
        />{" "}
      </aside>
      <FormBlock />
    </section>
  );
}
