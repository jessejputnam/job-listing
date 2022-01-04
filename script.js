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
const filterRemove = document.querySelector(".filter__item__remove");
const filterClear = document.querySelector(".filter__clear");
const itemContainer = document.querySelectorAll(".item__container");
const itemFilter = document.querySelectorAll(".item__filter");

/* ########Filter######## */
// Create filter item when item filter clicked
itemFilter.forEach((filterChoice) => {
  filterChoice.addEventListener("click", () => {
    // Check filter if choice already selected

    const newFilterItem = document.createElement("button");
    const newFilterName = document.createElement("div");
    const newFilterRemove = document.createElement("img");

    newFilterName.textContent = filterChoice.textContent;
    newFilterItem.classList.add("filter__item");
    newFilterName.classList.add("filter__item__name");
    newFilterRemove.classList.add("filter__item__remove");
    newFilterRemove.src = "images/icon-remove.svg";

    filterItemContainer.appendChild(newFilterItem);
    newFilterItem.appendChild(newFilterName);
    newFilterItem.appendChild(newFilterRemove);
  });
});

/* ########Items######## */
