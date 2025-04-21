import { shopItems } from "../../constants";

export default function ShopList() {
  return (
    <ul className="flex flex-col gap-12 w-[40.476vw]">
      {shopItems.map((shopItem, index) => (
        <li key={index} className="w-full flex gap-8">
          <img src={shopItem.image} alt={shopItem.itemName} />
          <div className="flex flex-col gap-2">
            <div>
              <p>{shopItem.currentPrice}</p>
              <h4>{shopItem.itemName}</h4>
            </div>
            <p>{shopItem.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
