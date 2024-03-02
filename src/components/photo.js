export const photoC = ({ photo, name }) => {
  return `<img
    class="h-full w-full rounded-full object-cover object-center"
    src="${photo}"
    alt="${name}"
  />`;
};
