import { useParams } from "react-router-dom";
import { classBlocks } from "../../classes/constants";

export default function UseIdParameter() {
  const id = useParams().id;
  const currentClass = classBlocks.find((classBlock) => classBlock.id === id);
  return currentClass;
}
