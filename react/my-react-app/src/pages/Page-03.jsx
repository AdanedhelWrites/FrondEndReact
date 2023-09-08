import { useState } from "react";

export function Page03() {
    return (
        <section>
            <h1>State içerisindeki dizileri güncelleme</h1>
            <InspiringArtistsList />
            <FamousArtistList />
            <MovingCircles />
        </section>
    );
}

function InspiringArtistsList() {
    const [artistName, setArtistName] = useState("");
    const [artistsList, setArtistsList] = useState("");

    function handleChange(e) {
        setArtistName(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        setArtistsList([...artistsList, <li key={artistName}>{artistName}</li>])

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="artistName"
                    id="artistName"
                    placeholder="Sanatci adini yazin"
                    onChange={handleChange}
                    value={artistName}
                />
                <button type="submit">Ekle</button>

            </form>
            <ul>
                {artistsList}
            </ul>
        </div>
    );
}
const famouseArtistsList = [
    { id: 0, name: "Tarkan" },
    { id: 1, name: "Da vinci" },
    { id: 2, name: "David Bombal" },
    { id: 3, name: "John Hammond" },
    { id: 4, name: "Chuck" },
    { id: 5, name: "Kibbelse" },

]

function FamousArtistList() {
    const [artists, setArtists] = useState(famouseArtistsList);

    function deleteArtist(artistId) {
        setArtists(artists.filter(a => a.id !== artistId));
    }

    return (
        <>
            <h3>Meshurlar</h3>
            <ul>
                {artists.map((artist) => {
                    return <li key={artist.id}>{artist.name}
                        <button onClick={() => {
                            deleteArtist(artist.id);
                        }}> Sil </button>
                    </li>
                })}
            </ul>
        </>
    )
}

const DATA_SHAPES = [
    { id: 0, type: "circle", x: 50, y: 50 },
    { id: 1, type: "square", x: 150, y: 50 },
    { id: 2, type: "circle", x: 250, y: 50 },
]

function MovingCircles() {
    const [shapes, setShapes] = useState(DATA_SHAPES);
    function handleCirclePosition() {
        const newData = shapes.map((data) => {
            if (data.type === "circle") {
                return { ...data, y: data.y + 50 }
            }
            return data;
        })
        setShapes(newData);
    }

    return (
        <div style={{ position: "relative", height: "300px" }}>
            <button type="button" onClick={handleCirclePosition}>Sadece çemberleri hareket ettir.</button>
            {shapes.map(shape => <div key={shape.id}
                style={{ width: "40px", height: "40px", backgroundColor: "red", borderRadius: shape.type === "circle" ? "50%" : "0", position: "absolute", top: shape.y, left: shape.x }}> </div>)}
        </div>
    )
}