import { useState } from "react";

export function Page02() {
    return (
        <section>
            <h1>Welcome to Page 2 ~ State Icinde Obje Guncelleme</h1>
            <MovingDot />
            <FrmPerson />
        </section>

    );
}

function MovingDot() {
    //onPointerMove e.clientX, e.clientY
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const stageStyles = {
        border: "2px solid gray",
        padding: "24px",
        position: "relative",
        width: "200px",
        height: "200px",

    }
    const dotStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "blue",
        position: "absolute",
        transform: `translate(${position.x}px, ${position.y - 180}px)`,
        pointerEvents: "none",

    }
    function handlePointerMove(e) {
        // const newPos = { x: e.clientX, y: e.clientY };
        // setPosition(newPos)
        setPosition({ x: e.clientX - 24, y: e.clientY - 24 })
    }
    return <div style={stageStyles} onPointerMove={handlePointerMove}>
        <div style={dotStyle}></div>
    </div>;
}

function FrmPerson() {
    const [person, setPerson] = useState(
        {
            firstName: "Turin",
            lastName: "Turambar",
            email: "turambar@gmail.com"
        }
    );
    function handleFirstName(e) {
        const newPerson = {
            ...person,
            firstName: e.target.value,

        }
        setPerson(newPerson)
    }
    function handleLastName(e) {
        const newPerson = {
            ...person,
            lastName: e.target.value,

        }
        setPerson(newPerson)

    }
    function handleEmail(e) {
        const newPerson = {
            ...person,
            email: e.target.value,
        }
        setPerson(newPerson)

    }
    return (
        <form>
            <input type="text" name="firstName" placeholder="Isim" onChange={handleFirstName} value={person.firstName} />
            <input type="text" name="lastName" placeholder="Soyisim" value={person.lastName} onChange={handleLastName} />
            <input type="email" name="email" placeholder="Eposta" value={person.email} onChange={handleEmail} />
        </form>
    );
}
