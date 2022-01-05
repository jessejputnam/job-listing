"use strict";

/*
Table of Contents

#DOM Variables
#Filter
#Items

*/

/* ########DOM Variables######## */
const filter = document.querySelector(".filter");
const filterItemContainer = document.querySelector(".filter__item__container");
let filterRemove = document.querySelectorAll(".filter__item__remove");
const filterClear = document.querySelector(".filter__clear");
const itemContainer = document.querySelectorAll(".item__container");
const itemFilter = document.querySelectorAll(".item__filter");

/* ########Filter######## */
document.addEventListener("mouseup", () => {
  if (!filterItemContainer.hasChildNodes()) filter.classList.add("hidden");
});

// Create filter item when item filter clicked
itemFilter.forEach((filterChoice) => {
  filterChoice.addEventListener("click", () => {
    // Remove hidden filter if empty
    if (filter.classList.contains("hidden")) filter.classList.remove("hidden");
    // Check filter if choice already selected

    const newFilterItem = document.createElement("button");
    const newFilterName = document.createElement("div");
    const newFilterRemove = document.createElement("img");

    newFilterName.textContent = filterChoice.textContent;
    newFilterItem.classList.add("filter__item");
    newFilterName.classList.add("filter__item__name");
    newFilterItem.setAttribute("id", filterChoice.textContent);
    newFilterRemove.classList.add("filter__item__remove");
    newFilterRemove.src = "images/icon-remove.svg";

    filterItemContainer.appendChild(newFilterItem);
    newFilterItem.appendChild(newFilterName);
    newFilterItem.appendChild(newFilterRemove);

    filterRemove = document.querySelectorAll(".filter__item__remove");
    console.log(filterRemove);
  });
});

// Remove filter items when clicked
filterRemove.forEach((item) => {
  item.addEventListener("mousedown", (e) => {
    console.log(e);
    console.log(filterRemove);
    // item.parentNode.parentNode.removeChild(document.getElementById());
  });
});

document.addEventListener("keypress", () => {
  console.log(filterRemove);
});

for (let i = 0; i < filterRemove.length; i++) {
  filterRemove[i].addEventListener("click", () => {
    console.log("hey ", i);
  });
}

/* ########Items######## */
