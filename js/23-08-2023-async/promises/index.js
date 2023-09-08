const isRainy = false;

const iWillBeThereOnTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!isRainy) {
            resolve("Yetisebilirim")
        }
        reject("Yağmur yetişmeme engel oluyor")
    }, 1000)
});

iWillBeThereOnTime
    .then((message) => { console.log(message); })
    .catch((errMsg) => { console.log(errMsg); });

function customFetch() {
    //statement
}

function loadData(url) {
    return new Promise((resolve, reject) => {
        const response = customFetch(url);
        if (response.ok) {
            resolve(response.data)
        }
        reject("Server error");
    })
}

loadData("theurl").then((data) => console.log(data))
    .catch((err) => { console.log(err); })




