import { formInputsBlockOne } from "../../constants";
import { dateAndTimeFormInputs } from "../../constants";
import InputBlock from "../../../common/components/input-block";
import FormButton from "../../../common/components/form-button";

export default function Form() {
  return (
    <form
      action=""
      className="flex flex-col items-center gap-[min(48px,4.8vh)] w-full"
    >
      {formInputsBlockOne.map((inputs, index) => (
        <InputBlock key={index} inputs={inputs} />
      ))}
      <section className="flex w-full gap-8">
        {dateAndTimeFormInputs.map((inputs, index) => (
          <InputBlock key={index} inputs={inputs} />
        ))}
      </section>
      <FormButton text="book a table" />
    </form>
  );
}
