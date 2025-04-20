import PageTitle from "../common/components/page-title";

export default function Shop() {
  return (
    <main className="bg-default-bg flex">
      <aside>
        <PageTitle
          width="50vw"
          mainText="give a gift"
          subText="Shop"
          image="url('/restaurant/image3.png')"
          position="center bottom"
        />
      </aside>
    </main>
  );
}
