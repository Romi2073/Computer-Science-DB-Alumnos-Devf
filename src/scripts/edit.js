import { alumnos, subjectsOptions, raitingOptions } from "../db";
import { updateList } from "./read";
import { $modal, $modalContainer } from "../main";
import { formC } from "../components/form";
import { getFormValues } from "../utils/getFormValues";
import { findIndex } from "../utils/findIndex";

const handleSubmitEdit = (e, index) => {
  e.preventDefault();

  const data = getFormValues(e.target);

  alumnos[index] = {
    ...alumnos[index],
    name: data.name,
    age: data.age,
    subjects: subjectsOptions[data.subjects],
    raiting: raitingOptions[data.raiting],
    grupo: data.grupo,
  };

  updateList();
  e.target.reset();
  $modal.classList.add("hidden");
};

export const handleEdit = (event) => {
  const index = event.dataset.index;
  const tempUser = alumnos[index];

  $modal.classList.remove("hidden");
  $modalContainer.innerHTML = formC({ id: "edit-user" });

  const $form = document.querySelector("#edit-user");

  $form.name.value = tempUser.name;
  $form.age.value = tempUser.age;

  $form.subjects.value = findIndex({
    array: subjectsOptions,
    searchString: tempUser.subjects,
  });
  $form.raiting.value = findIndex({
    array: raitingOptions,
    searchString: tempUser.raiting,
  });

  $form.addEventListener("submit", (e) => handleSubmitEdit(e, index));
};
