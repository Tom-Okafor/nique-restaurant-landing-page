export const setCurrentMenuListSection = (currentSection) => {
  const scrollContainer = document.getElementById("menu-block");
  const menuCategoryList = Array.from(
    document.querySelectorAll(".menu-category")
  );
  const categoryListTopPostition = menuCategoryList.map(
    (category) =>
      Math.ceil(
        category.getBoundingClientRect().top + scrollContainer.scrollTop
      ) - 200
  );

  if (
    currentSection < categoryListTopPostition.length - 1 &&
    categoryListTopPostition[currentSection + 1] <= scrollContainer.scrollTop
  ) {
    return currentSection + 1;
  }
  if (
    currentSection > 0 &&
    categoryListTopPostition[currentSection] > scrollContainer.scrollTop
  ) {
    return currentSection - 1;
  }
  return currentSection;
};
