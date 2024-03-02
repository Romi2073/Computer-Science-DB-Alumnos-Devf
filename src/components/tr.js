import { avatarC } from "./avatar";
import { photoC } from "./photo";

export const trC = ({ name, age, raiting, raiting1, subjects, subjects1, photo, index }) => {
  return `
    <th class="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
      <div class="relative h-10 w-10">
        ${photo ? photoC({ name, photo }) : avatarC({ name })}
        <span
          class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"
        ></span>
      </div>
      <div class="text-sm">
        <div class="capitalize font-medium text-gray-700">${name}</div>
      </div>
    </th>
    <td class="px-6 py-4">
      <span
        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
        ${age}
      </span>
    </td>
    <td class="px-6 py-4 text-blue-500 font-semibold">${subjects}</td>
    <td class="text-violet-500 font-semibold">${subjects1}</td>
    <td class="px-6 py-4">
      <div class="flex gap-4">
        <span
          class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
        >
          ${raiting}
        </span>
        <span
          class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
        >
        ${raiting1}
        </span>
      </div>

    </td>
    <td class="px-6 py-4">
      <div class="flex justify-end gap-4">
        <button data-index="${index}" data-action="edit" class="h-[30px] w-[30px] px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100 border">
          <img class"h-full w-full" src="./edit.svg" alt="icon-edit">
        </button>
        <button data-index="${index}" data-action="delete" class="h-[30px] w-[30px] px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100 border">
          <img class"h-full w-full" src="./delete.svg" alt="icon-delete">
        </button>
      </div>
    </td>
  `;
};
