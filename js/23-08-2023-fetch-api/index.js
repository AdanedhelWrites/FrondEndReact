//api ->> https://64e5d14809e64530d17f14ba.mockapi.io/

//api works ->> https://64e5d14809e64530d17f14ba.mockapi.io/works

//api works id ->> https://64e5d14809e64530d17f14ba.mockapi.io/works/1


fetch("https://64e5d14809e64530d17f14ba.mockapi.io/works")
    .then((response) => { console.log(response); })


fetch("https://64e5d14809e64530d17f14ba.mockapi.io/works")
    .then((response) => {
        return response.json();
    })
    .then((data => { console.log(typeof data); }))
    .catch((err) => console.log(err.message));


fetch("https://64e5d14809e64530d17f14ba.mockapi.io/works/1").then((response) => {
    return response.json();
})
    .then((data => { console.log(data); })).catch((err => console.log(err.message)))



fetch("https://64e5d14809e64530d17f14ba.mockapi.io/works")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Something went wrong !");
    }).then((data) => {
        console.log(data);
    }).catch((err) => { console.log(err.message); });


const api = "https://64e5d14809e64530d17f14ba.mockapi.io/jobs";

fetch(api).then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error("What are you trying ?");
}).then((jsonData) => {
    console.log(jsonData);
}).catch((err) => { console.log(err.message); })


fetch("https://64e5d14809e64530d17f14ba.mockapi.io/jobs/22").then((response) => {
    return response.json();
}).then((veri) => {
    console.log(veri);
})


//delete methods

fetch("https://64e5d14809e64530d17f14ba.mockapi.io/jobs/1", { method: "DELETE" }).then((response) => console.log(response));

//post method

const newWorks = { title: "SFG", description: "what are we doing", excerpt: "what are u looking at ?" }

const addWorkFetchOpts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newWorks),
}

fetch("https://638a06e04eccb986e8a1804b.mockapi.io/works", addWorkFetchOpts).then((response) => {
    return response.json();
})