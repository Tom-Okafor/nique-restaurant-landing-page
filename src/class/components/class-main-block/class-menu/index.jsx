import { classMenu } from "../../../constants";

export default function ClassMenu() {
  return (
    <section className="space-y-8 w-full">
      <h2 className="text-heading-medium-italic text-primary font-bitter-rose">
        Menu
      </h2>
      <ul className="space-y-8 w-full">
        {classMenu.map((menu, index) => {
          return (
            <li className="flex gap-6 items-center" key={index}>
              <img
                src={menu.image}
                alt={menu.name}
                className="rounded-[10px] w-[90px] h-[72px]"
              />
              <div className="flex flex-col gap-1">
                <h5 className="font-Chillax-medium text-default capitalize">
                  {menu.name}
                </h5>
                <p className="font-Chillax-regular text-muted2 text-default-size">
                  {menu.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
