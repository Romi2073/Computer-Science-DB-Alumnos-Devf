export const getLetters = (text = "D") =>
  text
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0] || "")
    .join("");
