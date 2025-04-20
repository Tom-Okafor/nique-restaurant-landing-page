import Footer from "../../../common/components/footer";
import { menuPageChoiceItems } from "../../constants";
import clsx from "clsx";

export function MenuList() {
  return (
    <section className="w-full flex flex-col items-start gap-[96px] py-20 px-[min(5.714vw,96px)]">
      {menuPageChoiceItems.map((item, index) => {
        return (
          <section
            key={index}
            id={item.category.toLowerCase()}
            className="flex flex-col gap-8 menu-category"
          >
            <p className="text-heading-small font-bitter-rose text-primary font-normal capitalize">
              {item.category}
            </p>
            <ul className="flex flex-col gap-4 isolate w-full">
              {item.options.map((option, index) => (
                <ListItem option={option} key={index} item={item} />
              ))}
            </ul>
          </section>
        );
      })}
      <Footer />
    </section>
  );
}

const MenuItemNameAndPrice = ({ option }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-large text-default font-Chillax-regular capitalize">
        {option.meal}
      </p>
      <p className="text-large text-default font-Chillax-regular">
        {option.cancelledPrice && (
          <span className="text-muted2 strikethrough line-through">
            {option.cancelledPrice}
          </span>
        )}{" "}
        <span>{option.price}</span>
      </p>
    </div>
  );
};

const ListItem = ({ option, item }) => {
  return (
    <li
      className={clsx(
        "flex p-4 pr-6 items-center gap-6 w-full",
        option.isMealOfTheDay
          ? "border rounded-2xl border-primary relative"
          : ""
      )}
    >
      <img
        src={option.image}
        className="rounded-[10px] w-[90px] h-[72px] object-cover"
      />
      <div className="w-full flex flex-col gap-1">
        <MenuItemNameAndPrice option={option} />
        <p className="text-default-size text-muted2 font-Chillax-light">
          {option.description}
        </p>
      </div>
      {option.isMealOfTheDay && (
        <div className="absolute h-[36px] bg-primary -top-4 right-6 py-2 px-3 rounded-md flex items-center justify-center text-sm text-inverse font-Chillax-regular">{`${
          item.category === "Starters" ? "Starter" : item.category
        } of the day`}</div>
      )}
    </li>
  );
};
