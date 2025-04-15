export default function FormButton({ text }) {
  return (
    <button className="w-full bg-primary-bg rounded-full h-[clamp(45px,6vh,60px)] text-inverse text-default-size uppercase font-Chillax-medium flex items-center justify-center cursor-pointer hover:bg-primary duration-300 hover:saturate-200">
      {text}
    </button>
  );
}
