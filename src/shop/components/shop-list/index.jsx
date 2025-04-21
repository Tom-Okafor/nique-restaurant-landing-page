import InfoCard from "../../../common/components/info-card";
import { shopItems } from "../../constants";

export default function ShopList() {
  return (
    <ul className="flex flex-col gap-12 w-[40.476vw]">
      {shopItems.map((shopItem, index) => (
        <InfoCard
          key={index}
          name={shopItem.itemName}
          price={shopItem.currentPrice}
          image={shopItem.image}
          description={shopItem.description}
        />
      ))}
    </ul>
  );
}
