export function Page01() {
    return (
        <section>
            <h2>Jsx İçinde js expression</h2>
            <MyButton />
            <SquareShape />
            <CircleShape />
            <ReactangleShape />
            <RedBall />
            <BlueBall />
            <YellowBall />
        </section>
    );
}


function MyButton() {
    const buttonsFirstName = "Jack";
    const buttonsLastName = "TheRipper";
    buttonsFirstName + buttonsLastName;
    return <button>{buttonsFirstName + buttonsLastName}</button>;
}

function SquareShape() {
    const edgeLenght = 12;
    edgeLenght * 4
    return <div>Ben çevresi {edgeLenght * 4} olan bir kareyim</div>;
}

function CircleShape() {
    const Pi = 3.1415;
    const radius = 14;
    return <p>Ben çevresi {Pi * 2 * radius} olan bir daireyim</p>;
}

function ReactangleShape() {
    const shapeName = "rectangle";
    const shapeType = "basic";
    return <div className={shapeName + "-" + shapeType}>Ben bir dörtgenim</div>;
}

function RedBall() {
    const ballStyles = { backgroundColor: "red", border: "2px solid black", width: "40px", height: "40px", borderRadius: "50%" }
    return <div style={ballStyles}>Red ball</div>;
}


function BlueBall() {
    return <div style={{
        backgroundColor: "blue",
        border: "2px solid black",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
    }}> Blue ball</div >
}


function YellowBall() {
    const yellowBallProperty = {
        id: 1,
        theme: {
            backgroundColor: "yellow",
            border: "2px solid black",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
        }
    }
    return <div style={yellowBallProperty.theme}> Yellow ball</div >
}