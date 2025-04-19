import { classIcons } from "../../../constants";

export default function ClassTeacher() {
  return (
    <section className="space-y-8">
      <h2 className="text-heading-medium-italic font-bitter-rose text-primary">
        Teacher
      </h2>
      <div className="flex gap-8 items-start">
        <img
          src="/Jakob Grønberg.png"
          alt="Jakob Grønberg"
          className="size-[90px] rounded-full"
        />
        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="font-Chillax-medium pb-1 text-default">
              Jakob Grønberg
            </h4>
            <p className="text-default-size text-muted2 font-Chillax-regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="flex gap-4">
            {classIcons.map((icon, index) => {
              return (
                <button key={index} className="cursor-pointer">
                  <img src={icon.image} alt={icon.name} className="size-6" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
