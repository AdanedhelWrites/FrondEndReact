const api = "https://64e5d14809e64530d17f14ba.mockapi.io";

const questionTitleElement = document.querySelector(".question");

const answersListElement = document.querySelector(".options");


fetch(`${api}/questions/1`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Bir sey yanlis gitti bro");
    })
    .then((data) => {
        incomingData(data);

    });

function incomingData(data) {
    questionTitleElement.innerHTML = data.question;

    for (let i = 0; i < data.cevaplar.length; i++) {
        const liEl = document.createElement("li");
        const inputEl = document.createElement("input");
        const labelEl = document.createElement("label");
        inputEl.type = "radio";
        inputEl.name = "question " + data.question.id
        inputEl.id = `option${i + 1}`;
        console.log(inputEl.id);
        console.log(inputEl.name);
        labelEl.htmlFor = `option${i + 1}`;
        console.log(labelEl.htmlFor);

        labelEl.innerHTML = data.cevaplar[i];
        liEl.append(inputEl);
        liEl.append(labelEl);
        answersListElement.append(liEl);
        // labelEl.append(data.cevap1);
    }
    // input işlemleri


    // data.cevaplar.forEach(({ cevap1, cevap2, cevap3, cevap4 }) => {
    //     const h4El = document.createElement("h4");
    //     h4El.classList.add("question");
    // });
}

