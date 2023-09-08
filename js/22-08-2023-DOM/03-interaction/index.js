const myBtnEl = document.querySelector("[type=button]");


myBtnEl.addEventListener("click", handleClick);

function handleClick(e) {
    console.log(e);
    const target = e.target;
    target.classList.toogle("illuminated");
}


const buttons = document.querySelectorAll("nav button");

buttons.forEach(button => { button.addEventListener("click", handleClick2) })

function handleClick2(e) {
    const target = e.target;

    const index = target.dataset.index;
    // console.log(`Selamlar ben ${index}. butonum`);

}

const navEl = document.querySelector("nav");

navEl.addEventListener("click", handleNavClick);

function handleNavClick(e) {
    const index = e.target.dataset.index;
    console.log(e.target.tagName, index);
}