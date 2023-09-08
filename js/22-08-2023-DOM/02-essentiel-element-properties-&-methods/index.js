const boxEl = document.querySelector(".box");

console.log(boxEl);

boxEl.style.backgroundColor = "#ff0000";
boxEl.style.marginTop = "100px";
boxEl.style.borderColor = "#0000f";


const theme = boxEl.dataset.preferColorScheme;
const isHidden = boxEl.dataset.hidden;
const index = boxEl.dataset.index;

console.log(theme, isHidden, typeof index);


const classAttr = boxEl.getAttribute("class");



const classList = boxEl.classList;

boxEl.classList.add("lg");

boxEl.classList.remove("lg");

boxEl.classList.toggle("lg");

boxEl.classList.toggle("lg");//tıklıyor


const isLg = boxEl.classList.contains("lg");

console.log(isLg);

boxEl.textContent = "Hello box...";

boxEl.innerHTML = "<p>I am the par<p>";

const myNewArticleEl = document.createElement("article");
myNewArticleEl.classList.add("box");
myNewArticleEl.textContent = "I am article 2023";

document.body.append(myNewArticleEl);




