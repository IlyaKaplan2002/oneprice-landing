export const scrollTo = (hash) => {
  document.getElementById(hash).scrollIntoView({ behavior: "smooth" });
};

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
