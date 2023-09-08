const colors = ["red", "blue", "green", "aqua", "orange", "orangered", "wheat", "limegreen", "pink"]

const btnCreateBoxEl = document.getElementById("btn-create-box");

const stageEl = document.getElementById("stage");

btnCreateBoxEl.addEventListener("click", handleCreateBox);

let prevRand = null;

function handleCreateBox(e) {
    let rand = Math.floor(Math.random() * colors.length)
    const divEl = document.createElement("div");
    divEl.classList.add("box");
    while (prevRand === rand) {
        rand = Math.floor(Math.random() * colors.length);
    }
    prevRand = rand;
    divEl.style.backgroundColor = colors[prevRand];
    stageEl.append(divEl);
}

let index = -1;

//Math.random()

//Math.floor()

//Math.cell()