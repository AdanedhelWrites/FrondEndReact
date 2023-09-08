const BASE_URL = "http://localhost:8080";


export function login(credentials) {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),// "{'username':'Turin', 'password':'turambar'}"
    };
    return fetch(BASE_URL + "/login", options).then((resp) => {
        if (!resp.ok) {
            throw new Error("Kullanıcı Adı veya Şifre Hatalı")
        }
        return resp.json();
    }).then((data) => {
        return data
    }).catch((err) => { console.log(err.message); })
}

export function getWorks() {
    return fetch(`${BASE_URL}/works`).then((response) => {
        if (!response.ok) {
            throw new Error("Unvalid Parameter")
        }
        return response.json();
    }).then((data) => { return data }).catch((err) => { err.message })
}

export function getWork(id) {

}

export function deleteWork(id) {
    const options = {
        method: "DELETE",
    }
    return fetch(`${BASE_URL}/works/${id}`, options).then((response) => {
        if (!response.ok) {
            throw new Error("Unvalid Parameter")
        }
        return true;
    }).then((data) => { return data }).catch((err) => { err.message })
}

export function updateWork(id) {

}

export function addWork(work) {
    //localhost:8080/works BİR WORK OBJESI YOLLA, POST YOLLANACAK
    console.log(work);
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(work)
    }
    return fetch(`${BASE_URL}/works`, options).then((response) => {
        if (!response.ok) {
            throw new Error("Unvalid Parameter")
        }
        return response.json();
    }).then((data) => {
        return data
    })
        .catch((err) => { err.message })


}