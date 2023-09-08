import { DATA_CONTACTS } from "../data"
import { useState } from "react";
import classes from "../assets/styles/filterablecontactlist.module.css"

DATA_CONTACTS.sort((a, b) => {
    if (a.profession > b.profession) {
        return 1;
    }
    if (a.profession < b.profession) {
        return -1;
    }
    return 0;
})

function SearchBar({ searchTerm, onTermChange, onlineOnly, onOnlineOnlyChange }) {
    // const [searchTerm, setSearchTerm] = useState("");
    return (
        <header>
            <h3>Filterable Contact List</h3>
            <form>
                <input type="text" name="searchTTerm" id="searchTerm" placeholder="People of middle earth"
                    onChange={(e) => {
                        onTermChange(e.target.value);
                    }}
                    value={searchTerm} />

                <label>
                    <input type="checkbox" name="onlyOnline" id="onlyOnline" onChange={() => {
                        onOnlineOnlyChange(!onlineOnly)
                    }} checked={onlineOnly} />
                    Sadece Online Olanları Göster
                </label>
            </form>
        </header>
    );
}

function ContactTable({ searchTerm, onlineOnly }) {
    const contacts = [];
    let lastProfession = null;
    DATA_CONTACTS.forEach((c) => {
        if (c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
            return;
        }
        if (onlineOnly && !c.isOnline) {
            return;
        }

        if (lastProfession !== c.profession) {
            contacts.push(<RowProfession key={c.profession} profession={c.profession} />);
        }
        contacts.push(<RowContact key={c.id} name={c.name} profession={c.profession} email={c.email} />);

        lastProfession = c.profession;
    });
    return (
        <table className={classes.tbl}>
            <thead>
                <tr>
                    <th>People</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {/* {contacts.map((c) =>
                    <RowContact key={c.id} name={c.name} email={c.email} />
                )} */}
                {contacts}
                {/* <RowProfession profession="Orc Hunter" />
                <RowContact name="Turin turambar" email="turambar@gmail.com" />
                <RowContact name="Aewan" email="aewan@gmail.com" />
                <RowProfession profession="Mage" />
                <RowContact name="Galadriel" email="galadriel@gmail.com" />
                <RowContact name="Saruman" email="saruman@gmail.com" /> */}
            </tbody>
        </table>
    )
}

function RowProfession({ profession }) {
    return (
        <tr>
            <th colSpan={2}>{profession}</th>
        </tr>
    )

}
function RowContact({ name, email }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    )
}
export function FilterableContactListe() {
    const [searchTerm, setSearchTerm] = useState("");
    const [onlineOnly, setOnlineOnly] = useState(false);
    return <div>
        <SearchBar searchTerm={searchTerm} onTermChange={setSearchTerm} onlineOnly={onlineOnly} onOnlineOnlyChange={setOnlineOnly} />
        <div>
            <ContactTable searchTerm={searchTerm} onlineOnly={onlineOnly} />
        </div>
    </div>
}