import { shopItems } from "../../constants";

export default function ShopList() {
  return (
    <ul className="flex flex-col gap-12 w-[40.476vw]">
      {shopItems.map((shopItem, index) => (
        <li key={index} className="w-full flex gap-8 items-center">
          <img
            src={shopItem.image}
            alt={shopItem.itemName}
            className="h-[210px] w-[280px] object-cover"
          />
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-default-size font-Chillax-regular text-primary uppercase">
                {shopItem.currentPrice}
              </p>
              <h4 className="font-Chillax-medium text-default capitalize">
                {shopItem.itemName}
              </h4>
            </div>
            <p className="text-default-size text-muted2 font-Chillax-regular">
              {shopItem.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
