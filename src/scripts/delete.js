import { alumnos } from "../db";
import { updateList } from "./read";

// delete user
export const handleDelete = (event) => {
  const index = event.dataset.index;
  alumnos.splice(index, 1);
  updateList();
};
