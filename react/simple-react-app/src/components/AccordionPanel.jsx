import { DATA_ME } from "../data";
import classes from "../assets/styles/AccordionPanel.module.css"
import { useState } from "react";

export function AccardionPanel() {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className={classes.Accordion}>
            <h2>Akardion Panel</h2>
            <ul>
                {DATA_ME.map((d) => (
                    <Panel key={d.id} {...d} id={d.id} onSelectedIdChange={setSelectedId} isActive={d.id === selectedId} />
                ))}
            </ul>
        </div>
    );
}

export function Panel({ isActive, title, id, content, onSelectedIdChange }) {
    return (
        <li>
            <h2>{title}</h2>
            {isActive && <p>{content}</p>}
            {!isActive && <button type="button" onClick={() => { onSelectedIdChange(id) }}>Detay</button>}
        </li>
    )
}