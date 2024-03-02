import { alumnos, subjectsOptions, raitingOptions } from "../db";
import { $modal } from "../main";
import { getFormValues } from "../utils/getFormValues";
import { updateList } from "./read";

// create user
export const handleSubmit = (e) => {
  e.preventDefault();

  const tmpUser = getFormValues(e.target);
  const newUser = {
    ...tmpUser,
    subjects: subjectsOptions[tmpUser.subjects],
    raiting: raitingOptions[tmpUser.raiting],
  };

  alumnos.push(newUser);
  updateList();

  e.target.reset();
  $modal.classList.add("hidden");
};
