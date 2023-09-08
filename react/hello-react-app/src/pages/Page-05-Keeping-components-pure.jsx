export function Page05() {
    return (
        <section>
            <h2>Functional Programing - Pure Functions</h2>
            <Recipe questCount={3} />
            <Table />

        </section>
    );
}


//Uymayan taraf
// let counter = 0;

// function testing() {
//     counter++;
//     return counter;
// }

// console.log(testing());


//Soğuk çay tarif componenti
//Komponente ulasan questCount argümanı aynı ise komponentin üreteceği sonuç değişmez
function Recipe({ questCount }) {
    return (
        <>
            <h3>{questCount} kişi için soguk çay yapılıyor</h3>
            <ul>
                <li>{questCount * 0.5} buz</li>
                <li>{`${questCount * 100}ml`} su</li>
                <li>{questCount} limon</li>
            </ul>
        </>
    );
}


//Impure Component ~~~ SAF OLMAYAN COMPONENT
let questCount = 0;

function Table() {
    return (
        <>
            <h3>Masamiz:</h3>
            <ul>
                <Chair />
                <Chair />
                <Chair />
                <Chair />
                <PureChair questCount={1} />
                <PureChair questCount={2} />
                <PureChair questCount={3} />
                <GlassTable />
            </ul>
        </>
    );
}

function Chair() {
    questCount++;
    return <li>{questCount} kişi için sandalye</li>;
}

function PureChair({ questCount }) {
    return <li>{questCount} kişi için sandalye</li>;
}

function GlassTable() {
    const chairs = [];

    for (let i = 0; i < 10; i++) {
        chairs.push(<PureChair key={i} questCount={i} />);
    }
    return chairs;

}

//Side effects
function testingSideEffects() {

}