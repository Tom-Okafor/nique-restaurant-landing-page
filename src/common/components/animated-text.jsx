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
    <div className="max-w-[12ch]">
      {text.map((eachText, index) => {
        return (
          <div
            key={index}
            className="inline-block duration-500 ease-out mr-3"
            style={{
              transform: isSpanHidden[index]
                ? "translateY(-5%)"
                : "translateY(205%)",
            }}
          >
            {eachText}
          </div>
        );
      })}
    </div>
  );
}
