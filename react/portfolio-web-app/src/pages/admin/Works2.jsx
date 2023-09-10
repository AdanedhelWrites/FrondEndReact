import { getWorks, deleteWork } from "../../api/Api";

import { useState, useEffect } from "react";

export function Works() {
    const [works, setWorks] = useState();

    const [selectedWorkId, setSelectedWorkId] = useState();

    /* !!! CAUTION !!!
    getWorks().then((data) => {
      if (data) {
        console.log(data);
        //setWorks(data);
      }
    });
    */

    function handleWorkDelete(id) {
        deleteWork(id)
            .then((resp) => {
                if (resp) {
                    setWorks(works.filter((w) => w.id !== id));
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
        //deleteWork(id)
        //setWorks
    }

    function handleWorkUpdate(id, newWorkData) {
        alert("hi edit");
    }

    function handleWorkAdd(newWork) { }

    useEffect(() => {
        getWorks().then((data) => {
            if (data) {
                console.log(data);
                setWorks(data);
            }
        });
    }, []); //useEffect function çağırırken kullandığın ikinci argüman "Dependency Array" boş ise callback bir kez çağırılır

    return (
        <>
            <h1>İşler</h1>
            <FrmWorkItem onHandleFrmSubmit={handleWorkAdd} />
            {selectedWorkId}
            {!works && <p>Yükleniyor</p>}
            {works && (
                <ul className="workList">
                    {works.map((w) => (
                        <WorkItem
                            key={w.id}
                            {...w}
                            onWorkDelete={handleWorkDelete}
                            onWorkAdd={handleWorkAdd}
                            onWorkUpdate={handleWorkUpdate}
                            onWorkSelected={setSelectedWorkId}
                            selectedWorkId={selectedWorkId}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

function WorkItem({
    id,
    selectedWorkId,
    title,
    isFeatured,
    excerpt,
    description,
    coverImage,
    tags,
    onWorkDelete,
    onWorkUpdate,
    onWorkSelected,
}) {
    return (
        <>
            <li>
                <span>Id:{id}</span>
                <img src={`/images/${coverImage}`} alt="" />
                <span>{title}</span>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        onWorkSelected(id === selectedWorkId ? null : id);
                    }}
                >
                    {id === selectedWorkId ? " X Kapat" : "Düzenle"}
                </button>
                <button
                    onClick={() => {
                        onWorkDelete(id);
                    }}
                    type="button"
                    className="btn btn-danger"
                >
                    Sil
                </button>
            </li>
            {id === selectedWorkId ? (
                <FrmWorkItem
                    work={id === selectedWorkId ? { title, description } : null}
                    onHandleFrmSubmit={onWorkUpdate}
                />
            ) : null}
        </>
    );
}

function FrmWorkItem({ work, onHandleFrmSubmit }) {
    const [workFrmData, setWorkFrmData] = useState(
        work ? { ...work } : { title: "", descr: "" }
    );

    function handleChange(e) {
        let val;
        switch (e.target.name) {
            case "tags":
                val = e.target.value.split(",");
                break;
            case "isFeatured":
                val = e.target.checked;
                break;
            default:
                val = e.target.value;
            //
        }

        setWorkFrmData({ ...workFrmData, [e.target.name]: val });
    }

    console.log(workFrmData);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onHandleFrmSubmit();
            }}
        >
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Başlık Giriniz !!"
                onChange={handleChange}
                value={workFrmData.title}
            />

            <input
                type="text"
                name="excerpt"
                id="excerpt"
                placeholder="Hakkında Giriniz !!"
                onChange={handleChange}
                value={workFrmData.excerpt}
            />

            <input
                type="text"
                name="description"
                id="description"
                placeholder="Açıklama Giriniz !!"
                onChange={handleChange}
                value={workFrmData.description}
            />

            <input
                type="text"
                name="coverImage"
                id="coverImage"
                placeholder="Fotograf URL Giriniz !!"
                onChange={handleChange}
                value={workFrmData.coverImage}
            />

            <input
                type="text"
                name="tags"
                id="tags"
                placeholder="Etiketlerinizin arasına [VİRGÜL(,)] kullanarak giriniz !!"
                onChange={handleChange}
                value={workFrmData.tags}
            />

            <label>
                <input
                    type="checkbox"
                    name="isFeatured"
                    id="isFeatured"
                    placeholder="Is IMPORTANT !!"
                    onChange={handleChange}
                    value={workFrmData.isFeatured}
                    checked={workFrmData.isFeatured}
                />
                IMPORTANT FEATURE
            </label>

            <button type="submit">{work ? "UPDATE" : "SEND"}</button>
        </form>
    );
}
