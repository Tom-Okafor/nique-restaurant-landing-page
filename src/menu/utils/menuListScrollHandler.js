export const setCurrentMenuListSection = () => {
  const scrollContainer = document.getElementById("menu-block");
  const menuCategoryList = Array.from(
    document.querySelectorAll(".menu-category")
  );
  const heightScrolled = scrollContainer.scrollTop;
  const categoryListTopPostition = menuCategoryList.map(
    (category) =>
      Math.ceil(category.getBoundingClientRect().top + heightScrolled) - 200
  );

  const currentSection = categoryListTopPostition.findIndex(
    (topPosition, index) =>
      index < categoryListTopPostition.length - 1
        ? heightScrolled >= topPosition &&
          heightScrolled <= categoryListTopPostition[index + 1]
        : index === categoryListTopPostition.length - 1
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
