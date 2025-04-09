import { useEffect, useState } from "react";

const minorHeadingText = "The pure taste of";
const headingTextArray = minorHeadingText.split(" ");
export default function HeroText() {
  const [isSpanHidden, setIsSpanHidden] = useState(
    Array(headingTextArray.length).fill(false)
  );
  useEffect(() => {
    let index = 0;
    let newArray;
    const liftSpan = () => {
      index++;
      setIsSpanHidden((prev) => {
        newArray = [...prev];
        newArray[index - 1] = true;
        return newArray;
      });
      if (index < headingTextArray.length) {
        setTimeout(() => {
          liftSpan();
        }, 200);
      }
    };
    liftSpan();
  }, []);
  return (
    <section className="flex flex-col gap-[clamp(16px,3.2vh,32px)] items-center my-auto z-10 mb-[20.8vh]">
      <h1 className="flex flex-col items-center">
        <span className="text-primary text-heading-medium-italic font-normal font-bitter-rose flex overflow-y-hidden gap-4 leading-[100%]">
          {headingTextArray.map((eachText, index) => {
            return (
              <div
                key={index}
                className="inline-block duration-500 ease-out"
                style={{
                  transform: isSpanHidden[index]
                    ? "translateY(0)"
                    : "translateY(105%)",
                }}
              >
                {eachText}
              </div>
            );
          })}
        </span>
        <span className="text-default font-Chillax-medium text-heading-xlarge animate-scale-text">
          Thailand
        </span>
      </h1>
      <p className="font-Chillax-regular text-default text-xlarge text-center max-w-[300px] md:max-w-[35.7vw] animate-shrink-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </section>
  );
}
