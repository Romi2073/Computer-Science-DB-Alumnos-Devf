import { alumnos } from "../db";
import { updateList } from "./read";
import { debounce } from "../utils/debounce";

export const handleSearch = (event) => {
  event.preventDefault();
  const valueSerch = event.target.value.toLowerCase().trim();

  const filterAlumnos = alumnos.filter((alumno) =>
    alumno.name.toLowerCase().includes(valueSerch)
  );

  updateList(filterAlumnos);
};

export const debounceHandleSearch = debounce(handleSearch, 500);
