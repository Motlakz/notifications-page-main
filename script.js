let notificationCount = document.querySelector("header h3 span");
let notificationHeader = document.querySelector("header h3");
let messageCards = document.querySelectorAll(".message");
let markAllRead = document.querySelector("header a");
let cards = document.querySelectorAll(".card");

let count = 0;
// as long as the specific cards are selected and the circle is visible, highlight the cards with the specified color
for (let card of cards) {
  if (card.querySelector(".fa-circle")) {
    card.style.backgroundColor = "hsl(210, 60%, 98%)";
  }
}

//for each card that gets de-selected, remove the circle icon and revert the background to its original color and reduce the number of notifications that haven't been seen on the header
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

// when 'mark all as read' is selected, clear all specified elements of their interactive styling
markAllRead.addEventListener("click", () => {
  count = 0;
  notificationCount.innerText = count;
  notificationHeader.style.color = "#000000";
  document.querySelectorAll('.fa-circle').forEach(card => card.style.visibility = 'hidden');
  document.querySelectorAll('.card').forEach(card => card.style.backgroundColor = '');
});
