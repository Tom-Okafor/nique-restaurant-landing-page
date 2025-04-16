export default function InputBlock({ inputs }) {
  return (
    <section className="flex flex-col gap-4 w-full">
      <label
        htmlFor={inputs.label}
        className="text-default-size text-muted font-Chillax-light"
      >
        {inputs.label}
      </label>
      {inputs.type !== "textarea" ? (
        <input
          id={inputs.label}
          type={inputs.type}
          placeholder={inputs.placeholder}
          className="text-medium text-default font-Chillax-regular placeholder:text-medium placeholder:text-muted2 placeholder:font-Chillax-light w-full border border-default-border rounded-[10px] px-6 py-4 h-[min(6vh,60px)]"
        />
      ) : (
        <textarea
          className="w-full min-h-[min(20vh,200px)] text-medium text-default font-Chillax-regular placeholder:text-medium placeholder:text-muted2 placeholder:font-Chillax-light border border-default-border rounded-[10px] px-6 py-4 resize-none"
          placeholder={inputs.placeholder}
          id={inputs.label}
        ></textarea>
      )}
    </section>
  );
}
