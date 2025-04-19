import UseIdParameter from "./hooks/useIdParamater";
import PageTitle from "../common/components/page-title";
import ClassMainBlock from "./components/class-main-block";

export default function Class() {
  const currentClass = UseIdParameter();
  return (
    <main className="flex bg-default-bg">
      <aside>
        <PageTitle
          width="50vw"
          mainText={currentClass.title}
          subText={currentClass.category}
          image={`url(/${currentClass.image})`}
        />
      </aside>
      <ClassMainBlock />
    </main>
  );
}
