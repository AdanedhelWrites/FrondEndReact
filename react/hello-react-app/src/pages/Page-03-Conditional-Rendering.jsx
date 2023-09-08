export function Page03() {
    return (
        <section>
            <h2>Kosullu Render - Conditional Rendering</h2>
            <PackingList />
        </section>
    );
}

function PackingList() {
    return (
        <div>
            <h4>Selamun aleykum</h4>
            <ul>
                <PackingItem name="Şapka" isPacked={false} />
                <PackingItem name="Gözlük" isPacked={true} />
                <PackingItem name="Mayo" isPacked={false} />
                <PackingItem name="Valiz" isPacked={false} />
            </ul>


            <h4>Aleyna Aleykum selam</h4>
            <ul>
                <PackingItemV3 name="Şapka" isPacked={false} />
                <PackingItemV3 name="Gözlük" isPacked={true} />
                <PackingItemV3 name="Mayo" isPacked={false} />
                <PackingItemV3 name="Valiz" isPacked={false} />
            </ul>
        </div>
    )
}



function PackingItem({ name, isPacked }) {
    if (isPacked) {
        return <li>{name} ++</li>
    }
    return <li>{name}</li>

}


function PackingItemV3({ name, isPacked }) {
    return isPacked ? null : <li>{name}++</li>

}