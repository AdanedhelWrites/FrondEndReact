import { getWorks, deleteWork, addWork } from "../../Api"
import { useState } from "react"
import { useEffect } from "react";


export function Works() {
    const [works, setWorks] = useState();
    const [isVisible, setIsVisible] = useState(false);
    function handleWorkDelete(id) {
        deleteWork(id).then((resp) => {
            if (resp) {
                setWorks(works.filter((w) => w.id !== id))
            }
        }).catch((err) => { err.message })
        //deleteWork api baglancak
        //setWork diyip renderlicak
    }

    useEffect(() => {
        getWorks().then((data) => {
            if (data) {
                console.log(data);
                setWorks(data);
            }
        })
    }, []);

    return (
        <>
            <h1>Works</h1>
            <button type="button" onClick={() => { setIsVisible(!isVisible) }}>ADD ITEM</button>
            {isVisible && <AddItem works={works} setWorks={setWorks} />}

            {!works && <p>Yükleniyor !!</p>}
            {works && <ul className="workList">{
                works.map((w) => <WorkItem key={w.id} {...w} onWorkDelete={handleWorkDelete} />)
            }</ul>}
        </>
    );
}

function WorkItem({ id, title, isFeatured, excerpt, coverImage, tags, onWorkDelete }) {
    return <li>
        <span>ID: {id}</span>
        <img src={`/images/${coverImage}`} alt="" />
        <span>{title}</span>
        <button type="button" className="btn btn-primary">Update</button>
        <button type="button" onClick={() => { onWorkDelete(id) }} className="btn btn-danger">Delete</button>

    </li>;
}


function AddItem({ works, setWorks }) {
    const [newWork, setNewWork] = useState({ title: "", excerpt: "", description: "", coverImage: "", tags: [], isFeatured: false })
    //["backend","java","python","perl"]
    function handleChange(e) {
        if (e.target.name !== "tags") {
            setNewWork({
                ...newWork,
                [e.target.name]: e.target.name === "isFeatured" ? e.target.checked : e.target.value
            })
        }
        else {
            setNewWork({
                ...newWork,
                [e.target.name]: e.target.value.split(",")
            })
        }
    }

    function handleSendToDatabase(e) {
        e.preventDefault();
        //works [{title: "iş 1"},{title: "iş 2"}]
        //data {title: "iş 3"}
        addWork(newWork).then((data) => {
            setWorks([data, ...works])

        })
    }
    return <form onSubmit={handleSendToDatabase}>
        <input type="text" name="title" id="title" placeholder="Başlık Giriniz !!" onChange={handleChange} value={newWork.title} />
        <input type="text" name="excerpt" id="excerpt" placeholder="Hakkında Giriniz !!" onChange={handleChange} value={newWork.excerpt} />
        <input type="text" name="description" id="description" placeholder="Açıklama Giriniz !!" onChange={handleChange} value={newWork.description} />
        <input type="text" name="coverImage" id="coverImage" placeholder="Fotograf URL Giriniz !!" onChange={handleChange} value={newWork.coverImage} />
        <input type="text" name="tags" id="tags" placeholder="Etiketlerinizin arasına [VİRGÜL(,)] kullanarak giriniz !!" onChange={handleChange} value={newWork.tags} />
        <label>
            <input type="checkbox" name="isFeatured" id="isFeatured" placeholder="Is IMPORTANT !!" onChange={handleChange} value={newWork.isFeatured} />
            IMPORTANT FEATURE</label>
        <button type="submit">SEND</button>
    </form>
}
