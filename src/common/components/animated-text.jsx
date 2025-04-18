import { useEffect, useState } from "react";

export function AnimatedText({ text, delay }) {
  const [isSpanHidden, setIsSpanHidden] = useState(
    Array(text.length).fill(false)
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
      if (index < text.length) {
        setTimeout(() => {
          liftSpan();
        }, 200);
      }
    };
    setTimeout(liftSpan, delay);
  }, [text, delay]);

  return (
    <>
      {text.map((eachText, index) => {
        return (
          <div
            key={index}
            className="inline-block duration-500 ease-out"
            style={{
              transform: isSpanHidden[index]
                ? "translateY(-5%)"
                : "translateY(105%)",
            }}
          >
            {eachText}
          </div>
        );
      })}
    </>
  );
}
