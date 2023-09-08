import { useState } from "react";

export function Quiz() {
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState("0"); //0: STARTER POSITON  1: ERROR 2: SUCCESS 3: SUBMITTING

    if (status == "2") {
        return (<>
            <h1>Quiz!</h1>
            {status == "2" && <CongratzBox />}
        </>)
    }
    return (<>
        <h1>Quiz!</h1>
        <QuestionBox answer={answer} setAnswer={setAnswer} setState={setStatus} status={status} />
        {status == "1" && <WarningBox />}
    </>)
}

function submitAnswer(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer === "istanbul")
                resolve("success")
            else {
                reject(new Error("İyi denemeydi!"))
            }
        }, 2000);
    })
}

function WarningBox() {
    return <p> <h1>İyi denemeydi!</h1></p>

}

function CongratzBox() {
    return <p><h1>TEBRİKLER!</h1></p>
}

function QuestionBox({ answer, setAnswer, setState, status }) {

    function handleSubmit(e) {
        console.log(answer)
        console.log(status);
        e.preventDefault();
        setState("3")
        submitAnswer(answer).then(() => setState("2")).catch(() => setState("1"));
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Soru: İki kıtaya yayılmış şehrin adı nedir?</h1>
                <input type="text" onChange={(e) => setAnswer(e.target.value.toLowerCase())} value={answer} placeholder="Cevabınızı buraya girin." />
                <button type="submit" disabled={status == "3" && true}> Cevapla </button>
            </form>
        </>
    )
}