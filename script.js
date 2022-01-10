"use strict";

/*
Table of Contents

#DOM Variables
#Stored Variables
#Stored functions
#Filter
#Items

*/

/* ################ #DOM Variables######## */
const filter = document.querySelector(".filter");
const filterItemContainer = document.querySelector(".filter__item__container");
let filterRemove = document.querySelectorAll(".filter__item__remove");
const filterClear = document.querySelector(".filter__clear");
const itemContainer = document.querySelectorAll(".item__container");
const itemFilter = document.querySelectorAll(".item__filter");

/* ################ #Stored Variables ################ */
let newFilterName, newFilterItem, newFilterRemove;
let newFilterItems = [];

/* ################ #Stored Functions ################ */
const createFilterItemsDOM = function () {
  newFilterItem = document.createElement("button");
  newFilterName = document.createElement("div");
  newFilterRemove = document.createElement("img");
};

const addClassestoFilterItemsDOM = function () {
  newFilterItem.classList.add("filter__item");
  newFilterName.classList.add("filter__item__name");
  newFilterRemove.classList.add("filter__item__remove");
  newFilterRemove.src = "images/icon-remove.svg";
};

const appendItemsToDOM = function () {
  filterItemContainer.appendChild(newFilterItem);
  newFilterItem.appendChild(newFilterName);
  newFilterItem.appendChild(newFilterRemove);
};

/* ################ #Filter################ */
// Hide filter if empty
document.addEventListener("mouseup", () => {
  if (!filterItemContainer.hasChildNodes()) filter.classList.add("hidden");
});

// Clear Filter btn
filterClear.addEventListener("click", () => {
  // Remove all children of filter item container
  while (filterItemContainer.firstChild) {
    filterItemContainer.removeChild(filterItemContainer.firstChild);
  }
  // hide filter bar
  filter.classList.add("hidden");
  // unhide hidden item cards
  itemContainer.forEach((item) => item.classList.remove("hidden"));
  // empty filter array
  newFilterItems = [];
});

// Create filter item when item filter clicked
itemFilter.forEach((filterChoice) => {
  filterChoice.addEventListener("click", () => {
    // Add check of filter for if choice already selected
    if (newFilterItems.includes(filterChoice.textContent)) return;

    // Make filter visible
    if (filter.classList.contains("hidden")) filter.classList.remove("hidden");

    // Create new filter items in DOM
    createFilterItemsDOM();

    // Add relevant classes to new filter items
    newFilterName.textContent = filterChoice.textContent;
    newFilterItem.setAttribute("id", filterChoice.textContent);
    addClassestoFilterItemsDOM();

    // Add new items to DOM
    appendItemsToDOM();

    filterRemove = document.querySelectorAll(".filter__item__remove");
    newFilterItems.push(newFilterItem.id);

    // Hide item cards that don't match selection
    itemContainer.forEach((item) => {
      if (!item.classList.contains(filterChoice.textContent.toLowerCase()))
        item.classList.add("hidden");
    });

    // Remove filter item when clicked
    filterRemove.forEach((item) => {
      item.addEventListener("mousedown", (e) => {
        // remove filter item from array
        newFilterItems = newFilterItems.filter(
          (filterItem) => filterItem !== item.parentNode.textContent
        );
        // remove filter item from DOM
        item.parentNode.remove();
        // unhide previously filtered item cards
        itemContainer.forEach((item) => {
          if (!item.classList.contains(filterChoice.textContent.toLowerCase()))
            item.classList.remove("hidden");
        });
      });
    });
  });
});

document.addEventListener("keypress", () => {
  console.log(newFilterItems);
});

/* ########Items######## */
