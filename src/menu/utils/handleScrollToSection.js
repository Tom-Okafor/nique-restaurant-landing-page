export const handleMenuListNavigation = (id) => {
  const elementId = id.slice(1, id.length);
  const newSection = document.getElementById(elementId);
  const scrollContainer = document.getElementById("menu-block");
  const marginTop = 120;
  const portionScrolledY = scrollContainer.scrollTop;
  const sectionTop =
    Math.ceil(newSection.getBoundingClientRect().top) +
    portionScrolledY -
    marginTop;
  scrollContainer.scrollTo({ top: sectionTop, behavior: "smooth" });
};
