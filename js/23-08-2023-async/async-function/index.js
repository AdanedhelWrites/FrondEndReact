const baseUrl = "https://64e5d14809e64530d17f14ba.mockapi.io";

async function getWorks() {
    const response = await fetch(`${baseUrl}/works`);
    if (!response.ok) {
        throw new Error("WRONG WRONG WRONG !")
    }
    const data = await response.json();
    return data


}

getWorks().then((data) => {
    console.log(data);
}).catch((err) => console.log(message));