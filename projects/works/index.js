const ulEl = document.querySelector("main>ul");

getDatas();

function getDatas() {
    fetch("https://64e5d15a09e64530d17f14ea.mockapi.io/api/v1/works").then((response) => response.json()).then((data) => {

        data.forEach(createWorkItem);
    });
}

function createWorkItem(work) {
    const liEl = document.createElement("li");
    const h1El = document.createElement("h1");
    const h2El = document.createElement("h2");
    const btnEl = document.createElement("button");

    h1El.innerHTML = `Title: ${work.title}`
    liEl.append(h1El);
    h2El.innerHTML = `Description: ${work.descr}`;
    btnEl.innerText = "Sil Beni!";
    btnEl.dataset.id = work.id;
    liEl.append(h2El);
    liEl.append(btnEl);
    ulEl.appendChild(liEl);
    console.log(work);
}
ulEl.addEventListener("click", removeWorkItem)
function removeWorkItem(e) {
    const target = e.target;
    if (target.dataset.id) {
       if(window.confirm(`[${target.dataset.id}] ID'li Eleman silinecek. Onaylıyor musunuz?`)){
        fetch(`https://64e5d15a09e64530d17f14ea.mockapi.io/api/v1/works/${target.dataset.id}`, { method: "DELETE" }).then((response) => {
            if (response.ok) {
                return e.target.parentElement.remove();
            }
            throw new Error("Something went wrong...")
        }).catch((err) => console.log(err.message));
       }
        
    }   
}