import { trC } from "../components/tr";
import { alumnos, titles } from "../db";
import { $tbody } from "../main";
import { handleDelete } from "./delete";
import { handleEdit } from "./edit";

export const updateList = (users = alumnos) => {
  $tbody.innerHTML = "";

  if (!users.length) {
    $tbody.innerHTML = `
      <tr>
        <td colspan="${titles.length}"><p class="text-center py-2">No hay usuarios <p/></td>
      </tr>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  users.forEach((element, index) => {
    const tempTr = document.createElement("tr");
    tempTr.innerHTML = trC({ ...element, index }).trim();

    const editButton = tempTr.querySelector("[data-action='edit']");
    if (editButton) {
      editButton.addEventListener("click", () => handleEdit(editButton));
    }

    const deleteButton = tempTr.querySelector("[data-action='delete']");
    if (deleteButton) {
      deleteButton.addEventListener("click", () => handleDelete(deleteButton));
    }

    fragment.appendChild(tempTr);
  });

  $tbody.appendChild(fragment);
};
