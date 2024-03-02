import "./styles/app.css";
import { formC } from "./components/form";
import { thC } from "./components/th";
import { titles } from "./db";
import { handleSubmit } from "./scripts/create";
import { updateList } from "./scripts/read";
import { debounceHandleSearch } from "./scripts/search";


// DOM
const $tableContainer = document.querySelector("#table-container");
const $thMain = $tableContainer.querySelector("#tr");
export const $tbody = $tableContainer.querySelector("tbody");

export const $modal = document.querySelector("#modal");
export const $modalContainer = $modal.querySelector("#modal-container");
const $openModal = document.querySelector("#open-modal");
const $closeModal = document.querySelector("#close-modal");

export const $secondmodal = document.querySelector("#second-modal");
export const $secondmodalContainer = $modal.querySelector("#second-modal-container");
const $opensecondmodal = document.querySelector("#open-second-modal")
const $closesecondmodal = document.querySelector("#close-second-modal")


function renderTableTitles() {
  const titlesHTML = titles.map((title) => thC({ title })).join("");
  $thMain.innerHTML = titlesHTML;
}

window.addEventListener("DOMContentLoaded", (e) => {
  // modal
  $openModal.addEventListener("click", () => $modal.classList.remove("hidden"));
  $closeModal.addEventListener("click", () => {
    $modalContainer.querySelector("form").reset();
    $modal.classList.add("hidden");
  });
  $modalContainer.innerHTML = formC({ id: "create-user" });

  // titles table
  renderTableTitles();

  // render list users
  updateList();

  // create user
  const $form = document.querySelector("#create-user");
  $form.addEventListener("submit", handleSubmit);

  // search user
  const $searchForm = document.querySelector("#search");
  const $searchInput = $searchForm.querySelector("input");

  $searchForm.addEventListener("submit", (e) => e.preventDefault());
  $searchInput.addEventListener("input", debounceHandleSearch);
});

window.addEventListener("DOMContentLoaded", (e) => {

  // Second modal

  $opensecondmodal.addEventListener("click", () => $secondmodal.classList.remove("hidden"));
  $closesecondmodal.addEventListener("click", () => {
    $secondmodal.classList.add("hidden");
  });
  

  // create user
  const $form = document.querySelector("#create-user");
  $form.addEventListener("submit", handleSubmit);

});