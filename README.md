# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

Trickiest part was trying to figure out how to filter items with multiple filters, having each card be run through with multiple checks for each.

I finally realized an easy solution would be to create a counter for the filter checks. For each filter check that passes, it would add 1. 

If, by the end, the filter check counter was equal to the number of filters (`filters`.length), then that means the item passed ALL filter checks. 

Furthermore, having the filter update on mouse up from document allows for continuous checks and updates. May be resource intensive; I don't know. Maybe doesn't scale well.

```js
document.addEventListener("mouseup", () => {
  jobCards.forEach((card) => {
    let filterTrueCheck = 0;
    if (newFilterItems.length === 0) return card.classList.remove("hidden");
    newFilterItems.forEach((item) => {
      if ([...card.classList].includes(item)) filterTrueCheck++;
    });

    if (filterTrueCheck !== newFilterItems.length) card.classList.add("hidden");
    if (filterTrueCheck === newFilterItems.length)
      card.classList.remove("hidden");
  });
});
```