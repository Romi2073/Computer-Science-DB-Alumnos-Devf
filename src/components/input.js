export const inputC = ({ type, name, placeholder, required = false }) => {
  return `
    <div>
      <label
        for="${name}"
        class="text-gray-800 text-sm font-bold leading-tight tracking-normal capitalize"
        >${name}</label
      >
      <input
        id="${name}"
        type="${type}"
        name="${name}"
        class="text-gray-600 font-normal w-full h-10 pl-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border focus:border-blue-500"
        placeholder="${placeholder}"
        required="${required}"
      />
    </div>
  `;
};