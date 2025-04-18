import { classBlocks } from "../classes/constants";
import { useParams } from "react-router-dom";
import PageTitle from "../common/components/page-title";

export default function Class() {
  const id = useParams().id;
  const currentClass = classBlocks.find((classBlock) => classBlock.id === id);
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
    </main>
  );
}
