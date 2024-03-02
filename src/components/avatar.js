import { getLetters } from "../utils/getLetters";

export const avatarC = ({ name }) => {
  const generateName = getLetters(name);
  return `<p class="uppercase inline-flex justify-center items-center bg-sky-600 text-white h-full w-full rounded-full">
    ${generateName}
  </p>`;
};
