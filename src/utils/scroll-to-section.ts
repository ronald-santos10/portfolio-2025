export const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  const header = document.querySelector("#header");

  if (sectionElement && header) {
    window.scrollTo({
      top: sectionElement.offsetTop - header.clientHeight,
      behavior: "smooth",
    });
  }
};