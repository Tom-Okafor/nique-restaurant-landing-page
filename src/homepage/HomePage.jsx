const HomePage = () => {
  return (
    <section className="w-full h-screen bg-[#050505] flex flex-col py-[6.4vh] items-center relative">
      <div className="absolute inset-0 left-[13.75vw] top-0 bg-[url(/homepage.png)] bg-cover"></div>
      <p className="font-[Chillax-medium] text-white leading-[90%] text-[clamp(16px,1.905,32px)] z-10">
        nique.
      </p>
      <section className="flex flex-col gap-[clamp(16px,1.905,32px)] items-center my-auto z-10">
        <h1 className="flex flex-col items-center">
          <span className="text-[#FACE8D] text-[clamp(32px,4.76vw,80px)] leading-[90%] font-normal font-[Bitter-rose]">
            The pure taste of{" "}
          </span>
          <span className="text-white font-[Chillax-medium] leading-[90%] text-[clamp(48px,9.5vw,160px)]">
            Thailand
          </span>
        </h1>
        <p className="font-[Chillax-regular] text-white text-[clamp(16px,1.43vw,24px)] text-center leading-[160%] max-w-[300px] md:max-w-[35.7vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </section>
    </section>
  );
};

export default HomePage;
