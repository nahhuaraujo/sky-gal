export const scrollTo = (position: number) => {
  window.scrollTo({
    top: position,
    behavior: 'smooth',
  });
};
