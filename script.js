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
let newFilterItems = [];

/* ########Filter######## */
document.addEventListener("mouseup", () => {
  if (!filterItemContainer.hasChildNodes()) filter.classList.add("hidden");
});

// Create filter item when item filter clicked
itemFilter.forEach((filterChoice) => {
  filterChoice.addEventListener("click", (e) => {
    // Add check of filter for if choice already selected
    console.log(e.target);

    // Remove hidden filter if empty
    if (filter.classList.contains("hidden")) filter.classList.remove("hidden");

    // Create new filter items in DOM
    const newFilterItem = document.createElement("button");
    const newFilterName = document.createElement("div");
    const newFilterRemove = document.createElement("img");

    // Add relevant classes to new filter items
    newFilterName.textContent = filterChoice.textContent;
    newFilterItem.classList.add("filter__item");
    newFilterName.classList.add("filter__item__name");
    newFilterItem.setAttribute("id", filterChoice.textContent);
    newFilterRemove.classList.add("filter__item__remove");
    newFilterRemove.src = "images/icon-remove.svg";

    // Add new items to DOM
    filterItemContainer.appendChild(newFilterItem);
    newFilterItem.appendChild(newFilterName);
    newFilterItem.appendChild(newFilterRemove);

    filterRemove = document.querySelectorAll(".filter__item__remove");
    newFilterItems.push(newFilterItem);

    // Remove filter item when clicked
    filterRemove.forEach((item) => {
      item.addEventListener("mousedown", (e) => {
        console.log(e.target);
        item.parentNode.remove();
      });
    });
  });
});

document.addEventListener("keypress", () => {
  console.log(newFilterItems);
});

/* ########Items######## */
