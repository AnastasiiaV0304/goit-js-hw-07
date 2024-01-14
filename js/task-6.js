function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add("box");
      fragment.appendChild(box);
    }

    boxesContainer.appendChild(fragment);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
