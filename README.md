# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
<img width="960" alt="image" src="https://user-images.githubusercontent.com/76655996/221641443-4577503c-a416-4163-aeec-b3693dc5f356.png">

### Links

- Live Site URL: [https://motlakz.github.io/notifications-page-main](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanillar JavaScript

### What I learned

I learned how to create interactive elements and toggling between them using JavaScript concepts such as forEach methods, functions, and on click event listeners.
I also learned how to initiate a countdown based on the unselected elements and keeping the count to 0 if there are no more notifications to read.

```js
messageCards.forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.fa-circle').style.display = 'none';
    card.style.backgroundColor = '#fff';
    notificationCount.innerText = --count;
    if (count < 0) {
      count = 0;
      notificationCount.innerText = count;
    }
  });
  notificationCount.innerText = ++count;
  notificationHeader.style.color = "#0055FF";
});

markAllRead.addEventListener("click", () => {
  count = 0;
  notificationCount.innerText = count;
  notificationHeader.style.color = "#000000";
  document.querySelectorAll('.fa-circle').forEach(card => card.style.visibility = 'hidden');
  document.querySelectorAll('.card').forEach(card => card.style.backgroundColor = '');
});
```

### Continued development

I intend to toy around with interactive states and apply them in future JavaScript related projects.

## Author

- Frontend Mentor - [@Motlakz](https://www.frontendmentor.io/profile/Motlakz)
- Twitter - [@MotlalepulaSel6](https://www.twitter.com/MotlalepulaSel6)
