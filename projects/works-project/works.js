const baseUrl = "https://64e5d14809e64530d17f14ba.mockapi.io";

const bodyEl = document.querySelector("main div");

const listEl = document.querySelector("main div #job-list");

fetch(`${baseUrl}/jobs`).then((response) => {
    // console.log(response);
    if (!response.ok) {
        throw new Error("You're doing wrong !!");
    }
    return response.json();
    console.log(response);
}).then((veri) => {
    veri.forEach(job => {
        const divEl = document.createElement("li");
        divEl.innerText = job.address;
        listEl.append(divEl);

    });
    console.log(veri);
}).catch((errMssg) => {
    console.log(errMssg.message);
});