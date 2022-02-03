const messageContainer = document.querySelector(".message");
const closeBtn = document.querySelector(".message > img");

if (document.getElementById("message-log").textContent === "")
  messageContainer.classList.add("hidden");

closeBtn.addEventListener("click", function () {
  messageContainer.classList.add("overlay");
  setTimeout(() => messageContainer.classList.add("hidden"), 300);
});

setTimeout(() => messageContainer.classList.add("hidden"), 5000);
