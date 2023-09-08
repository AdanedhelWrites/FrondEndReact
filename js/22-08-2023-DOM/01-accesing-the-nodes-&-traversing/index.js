console.log(document);

// document.title = "Hello Love";

const btnEle = document.getElementById("theButton");

// btnEle.textContent = "Noops";

const btnEls = document.getElementsByTagName("button");



for (let btn of btnEls) {
    console.log(btn);
};

const theBtnEl = document.querySelector("html body #theButton");

console.log(theBtnEl);


// console.log(btnEle);