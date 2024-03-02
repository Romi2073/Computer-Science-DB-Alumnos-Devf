export const selectC = ({ name, required = false, options = [] }) => {
  return `
  <div>
    <label
      for="${name}"
      class="text-gray-800 text-sm font-bold leading-tight tracking-normal capitalize"
      >${name}</label
    >
    <select
      class="text-gray-600 block rounded-lg border border-gray-300 focus:outline-none focus:border focus:border-blue-500 w-full h-10 px-3"
      name="${name}"
      id="${name}"
      required="${required}"
    >
      <option selected disabled value=""></option>
      ${options
        .map((option, index) => `<option value="${index}">${option}</option>`)
        .join("")}
    </select>
  </div>
  `;
};
