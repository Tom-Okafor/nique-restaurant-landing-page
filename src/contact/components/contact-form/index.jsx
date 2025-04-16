import InputBlock from "../../../common/components/input-block";
import FormButton from "../../../common/components/form-button";
import { contactFormFields } from "../../constants";

export default function ContactForm() {
  return (
    <form
      action=""
      className="flex flex-col items-center gap-[min(48px,4.8vh)] w-full"
    >
      {contactFormFields.map((formField, index) => (
        <InputBlock key={index} inputs={formField} />
      ))}
      <FormButton text="Send Message" d/>
    </form>
  );
}
