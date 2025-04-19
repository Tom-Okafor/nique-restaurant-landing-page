import UseIdParameter from "../../../hooks/useIdParamater";

export default function ClassDescription() {
  return (
    <section className="flex flex-col w-full gap-8">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
            <p className="text-muted2 font-Chillax-light text-default-size capitalize">cooking class</p>
            <h2 className="capitalize font-Chillax-medium text-default">reserve your spot</h2>
        </div>
        <p className="text-muted2 text-medium font-Chillax-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          massa id neque aliquam.
        </p>
      </div>
      <div className="flex gap-8 items-center">
        <button className="py-4 px-8 bg-primary-bg text-default-size text-inverse font-Chillax-medium rounded-full cursor-pointer">
          BOOK A SPOT
        </button>
        <h4 className="font-Chillax-medium text-default">89€</h4>
      </div>
    </section>
  );
}
