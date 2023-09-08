const DATA_PRODUCTS = [
    { id: 0, title: "Keyboard", price: 1500, promotion: 10, count: 15, img: "02.jpg" },

    { id: 1, title: "Guitar", price: 11000, promotion: 20, count: 22, img: "01.jpg" }
]

const basket = []

const productListEl = document.getElementById("product-list");

DATA_PRODUCTS.forEach(createProduct);
productListEl.addEventListener("click", handleProductClick);

const basketContainerContent = document.querySelector("#basket-container > .content");

function createProduct({ title, price, id, count, img: src }) {
    const liEl = document.createElement("li");
    liEl.classList.add("card");

    const h2El = document.createElement("h2");
    h2El.textContent = title;
    liEl.append(h2El);
    const imgEl = document.createElement("img");
    imgEl.src = "img/" + src;

    liEl.append(imgEl);

    const pEl = document.createElement("p");
    pEl.textContent = price + " TL";
    liEl.append(pEl);

    const btnBuyEl = document.createElement("button");
    btnBuyEl.textContent = "Sepete Ekle";
    btnBuyEl.dataset.id = id;
    liEl.append(btnBuyEl);

    productListEl.append(liEl);

}

function handleProductClick(e) {

    if (e.target.tagName === "BUTTON") {
        const productId = e.target.dataset.id; //string
        const selectedProduct = DATA_PRODUCTS.find((product) => {
            if (product.id == productId) { //iki esittir ise yarayabildi biri string biri int oldugu halde türlerine bakmadan eşitledi.. üç eşittir türleri ve herşeyiyle eşit mi diye kontrol ediyor
                return product;
            }
        });
        const found = basket.find((product) => {
            if (product.id == productId) {
                product.basketCount++;
                return true;
            }
        })
        if (!found) {
            basket.push({ ...selectedProduct, basketCount: 1 });

        }



        updateBasket();
        totalPrice();


    }
}



function updateBasket() {
    basketContainerContent.innerHTML = "";
    basket.forEach(({ img: src, title, basketCount }) => {
        const divEl = document.createElement("div");
        divEl.textContent = title + "x" + basketCount;
        const imgEl = document.createElement("img");
        imgEl.src = `img/${src}`;
        divEl.prepend(imgEl);

        basketContainerContent.append(divEl);
    })
}

function totalPrice() {
    let totalPrice = null;
    if (basket.length === 1) {
        totalPrice = basket[0].price * basket[0].basketCount;
    } else {
        totalPrice = basket.reduce((acc, { basketCount, price }) => acc + price * basketCount, 0)
    }
    const headerEl = document.querySelector("#basket-container > header");
    headerEl.textContent = "Sepetiniz: " + totalPrice;
}

