import UseIdParameter from "../../../hooks/useIdParamater";
import { classDetails } from "../../../constants";

export default function ClassDetails() {
  const currentClass = UseIdParameter();
  return (
    <section className="w-full flex flex-col gap-8">
      <p className="text-heading-medium-italic font-bitter-rose text-primary">
        Details
      </p>
      <ul className="flex flex-col divide-y divide-default-border gap-6 w-full">
        {classDetails.map((classDetail, index) => {
          return (
            <ListItem
              classDetail={classDetail}
              key={index}
              currentClass={currentClass}
            />
          );
        })}
      </ul>
    </section>
  );
}

function ListItem({ classDetail, currentClass }) {
  return (
    <li className="flex w-full justify-between items-start pb-6">
      <span className="text-medium font-Chillax-medium text-default">
        {classDetail.caption}
      </span>
      {classDetail.caption.toLowerCase() === "date" ? (
        classDetail.description.map((description, index) => (
          <span
            key={index}
            className="text-medium text-muted2 font-Chillax-regular"
          >{`${currentClass.date + " " + description}`}</span>
        ))
      ) : classDetail.caption.toLowerCase() === "teacher" ? (
        classDetail.description.map((description, index) => (
          <p className="flex gap-4 items-center">
            <img className="size-10" src="/Jakob Grønberg.png" alt="Jakob Grønberg" />
            <span
              key={index}
              className="text-medium text-muted2 font-Chillax-regular"
            >
              {description}
            </span>
          </p>
        ))
      ) : (
        <p className="flex flex-col items-end">
          {classDetail.description.map((description, index) => (
            <span
              key={index}
              className="text-medium text-muted2 font-Chillax-regular"
            >
              {description}
            </span>
          ))}
        </p>
      )}
    </li>
  );
}
