const containerDom = document.getElementById("container");
const playButton = document.getElementById("play");

playButton.addEventListener(
  "click",
  function () {
    const difficulty = document.getElementById("difficulty").value;
    console.log("difficulty: ", typeof difficulty);
    const difficultyN = parseInt(difficulty);
    console.log("difficultyN: ", typeof difficultyN);

    createToggableProgressiveNumberedBox(difficultyN);
  },
  { once: true }
);

function createToggableProgressiveNumberedBox(number) {
  for (let i = 1; i <= number; i++) {
    const addBox = document.createElement("div");
    addBox.className = "box";
    if (difficulty.value == '81') {
        addBox.classList.add("box9");
    } else if (difficulty.value == '49') {
        addBox.classList.add("box7");
    } else if (difficulty.value == '100') {
        addBox.classList.add("box10");
    }
    containerDom.append(addBox);
    addBox.append(i);
    addBox.addEventListener("click", function () {
      addBox.classList.toggle("active");
    });
  }
}
