function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxesContainer = document.getElementById("boxes");
const messageContainer = document.getElementById("message-container");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    boxesContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }
    boxesContainer.appendChild(fragment);

    input.value = "";
    messageContainer.textContent = "";
  } else {
    messageContainer.textContent = "Please enter a number between 1 and 100.";
    if (amount > 100) {
      input.value = "";
    }
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  messageContainer.textContent = "";
}
