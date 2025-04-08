import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Logo() {
  const text = "nique.";
  const splitText = text.split("");
  const letterState = Array.from({ length: splitText.length }, () => false);
  const [isLetterVisible, setLetterVisibility] = useState(letterState);
  useEffect(() => {
    let index = 0;
    const animateText = () => {
      index++;
      setLetterVisibility((prev) => {
        const newLettersArray = [...prev];
        newLettersArray[index - 1] = true;
        return newLettersArray;
      });
      if (index < splitText.length) {
        setTimeout(animateText, 200);
      }
    };
    animateText();
  }, [splitText]);
  return (
    <h3 className="font-[Chillax-medium] text-white z-10 mb-[24.5vh] overflow-hidden">
      {splitText.map((text, index) => {
        return (
          <span
            key={index}
            className={clsx(
              "inline-block duration-500",
              isLetterVisible[index]
                ? "opacity-100"
                : "opacity-0 blur-[4px] translate-x-10 translate-y-[105%]"
            )}
          >
            {text}
          </span>
        );
      })}
    </h3>
  );
}
