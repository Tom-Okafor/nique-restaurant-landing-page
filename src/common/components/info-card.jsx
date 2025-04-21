export default function InfoCard({ name, price, description, image }) {
  return (
    <li className="w-full flex gap-8 items-center">
      <img
        src={image}
        alt={name}
        className="h-[210px] w-[280px] object-cover"
      />
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-default-size font-Chillax-regular text-primary uppercase">
            {price}
          </p>
          <h4 className="font-Chillax-medium text-default capitalize">
            {name}
          </h4>
        </div>
        <p className="text-default-size text-muted2 font-Chillax-regular">
          {description}
        </p>
      </div>
    </li>
  );
}
