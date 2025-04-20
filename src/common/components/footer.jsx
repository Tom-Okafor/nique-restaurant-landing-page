import { footerLinkBlocks } from "../constants";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <section className="w-[min(40.476vw,680px)] flex justify-between">
      <section className="flex flex-col gap-8">
        <h3 className="text-default font-Chillax-medium">nique.</h3>
        <p className="flex flex-col text-sm text-muted2 font-Chillax-light gap-1">
          <span>By Tom Okafor</span>
          <span>Built with React</span>
          <span>Design By Pawel Gola</span>
        </p>
      </section>
      {footerLinkBlocks.map((block, index) => {
        return (
          <section className="flex flex-col gap-8" key={index}>
            <h6 className="font-Chillax-regular text-default capitalize">
              {block.title}
            </h6>
            {block.links.map((link, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <NavLink
                  to={`/${link}`}
                  className="text-muted2 text-default-size font-Chillax-regular capitalize"
                >
                  {link === 'reservation' ? 'book a table' : link}
                </NavLink>
              </div>
            ))}
          </section>
        );
      })}
    </section>
  );
}
