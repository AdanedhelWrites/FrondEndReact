const formEl = document.getElementById("frm-calculator-101");

formEl.addEventListener("submit", handleSumbit);

function handleSumbit(e) {
    e.preventDefault();
    const aVal = getInputValue("a");
    const bVal = getInputValue("b");

    if (!aVal || !bVal) {
        alert("Girdi kutularini kontrol et");
        return false;
    }
    console.log(aVal, bVal);
    messageToUser(addNums(aVal, bVal))
}

function getInputValue(name) {
    const input = document.querySelector(`[name=${name}]`)
    return input.value.trim();
}

function messageToUser(msgContent) {
    const msgBox = document.getElementById("msg-to-user");
    msgBox.textContent = msgContent;
}

function addNums(a, b) {
    const result = parseFloat(a) + parseFloat(b);
    if (isNaN(result)) {
        return "Sayi giriniz yazilar toplanamaz"
    }
    return result
}