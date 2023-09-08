import { useState } from "react";
import { sculptureList } from "../Data";
import "../assets/gallery.css"

export function Page01() {
    return (<section>
        <h1>Welcome to Page 1 ~ Bir komponentin hafizasi</h1>
        <Button />
        <Gallery />
        <FrmRegisterUser />
    </section>
    );
}

/*
function Button() {
    console.log("Buton");
    let counter = 0;
    function birArttir() {
        counter++;
        console.log(counter);
        Button();
    }
    return <button type="button" onClick={birArttir}>{counter}</button>
}
*/

function Button() {
    // [stateVariable , setterFunction] = useState(initialValue)
    const [counter, setCounter] = useState(0);

    function birArttir() {
        setCounter(counter + 1); //TRIGGERS A NEW RENDER
    }
    return (
        <button type="button" onClick={birArttir}>Buton {counter}</button>
    );
}

function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setMore] = useState(false);

    function handleNext() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        }
        // if (index < sculptureList.length - 1) {
        //     setIndex(index + 1);
        // else {
        //     const butEl = document.querySelector("button")
        //     butEl.disabled;
        //     // setIndex(0);
        // }
    }

    function handlePrevious() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    function handleMore() {
        setMore(!showMore)
    }
    return (
        <div className="gallery">
            <button type="button" disabled={index == 0 ? true : false} onClick={handlePrevious}>Previous</button>

            <span> {index + 1} - {sculptureList.length} </span>

            <button type="button" disabled={index > sculptureList.length - 2 ? true : false} onClick={handleNext}>Next</button>

            <h1>{sculptureList[index].name}</h1>
            <figure>
                <img src={sculptureList[index].url} alt="" />
                <figcaption>Artist: {sculptureList[index].artist}</figcaption>
            </figure>
            <button onClick={handleMore}>{showMore ? "Hide" : "Show"}</button>
            {showMore && <p>
                {sculptureList[index].description}
            </p>}
        </div>
    );
}

function FrmRegisterUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const fullName = firstName + " " + lastName

    function handleSubmit(e) {
        e.preventDefault();

    }
    function handleFirstName(e) {
        setFirstName(e.target.value)
    }
    function handleLastName(e) {
        setLastName(e.target.value)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="Adiniz" onChange={handleFirstName} value={firstName} />

            <input type="text" name="lastName" onChange={handleLastName} value={lastName} placeholder="Soyadiniz" />

            <button type="submit">Kaydol</button>

            <p>Hoşgeldiniz {fullName}</p>
        </form>
    )
}