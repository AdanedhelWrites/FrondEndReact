import { v4 as uuidv4 } from 'uuid';

const myArr = ["SA", "AS", "BYE", "LIKE", "HATE"]

const jsxList = [<li>SA</li>, <li>AS</li>, <li>BYE</li>, <li>LIKE</li>, <li>HATE</li>]
const myObj = { id: 0, isHidden: false }

// REDUCE ~ FOREACH ~ FILTER ~ MAP
export function Page04() {
    return (
        <section>
            <h2>Liste renderlamacasi</h2>

            <ul>
                {myArr}
                {jsxList}
            </ul>
            <PeopleOfJava9 />
            <FilterProfession profession="Physicist" />
            <Fruits />
        </section>
    )
}

const peopleList = ["Berk", "Doruk", "Hulya", "Engin", "Recep", "Emre"];

function PeopleOfJava9() {
    const peopleJsxList = peopleList.map((name) => {
        return <li>{name}</li>
    })


    return (
        <>
            <h2>Java9 Team</h2>
            <ul>
                {peopleJsxList}
            </ul>
        </>
    )
}

const famousPeopleList = [
    { id: 0, name: "Bob Marley", profession: "Singer" },
    { id: 1, name: "Tim Berners Lee", profession: "Computer Scientist" },
    { id: 2, name: "Alfred Nobel", profession: "Chemist" },
    { id: 3, name: "Robert Oppenheimer", profession: "Physicist" }

]

function FilterProfession({ profession }) {
    const filteredPeople = famousPeopleList.filter(person => { return person.profession === profession });//[{}, {}]

    const filteredPeopleJsxArray = filteredPeople.map((person) => (
        <li>{person.name + "-" + person.profession}</li>))
    return (
        <>
            <ul>
                {filteredPeopleJsxArray}
            </ul>
        </>
    )
}

const fruits = ["orange", "banana", "kiwi", "apple", "mango", "pineapple"];
const fruitUniqueIds = fruits.map(fruit => uuidv4());

function Fruits() {
    const fruitsJsxArr = fruits.map((fruit, index) => <li key={fruitUniqueIds[index]}>{fruit}</li>)
    return (
        <>
            <h3>Sevdigim Meyveler</h3>
            <ul>
                {fruitsJsxArr}
            </ul>
        </>
    )
}