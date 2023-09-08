export function Page06() {
    return (
        <section>
            <h2>Interaction</h2>
            <Button>
                Merhaba ben buton
            </Button>
            <ButtonV2>
                Selamlar
            </ButtonV2>
            <ButtonV3>
                Buton3
            </ButtonV3>
            <MessageButton message="Selamlar">
                Mesaj Butonu
            </MessageButton>
            <div>
                <PlayButton />
                <UploadButton />
            </div>
            <NavBar />
            <FrmLogin />

        </section>
    )
}




function Button({ children }) {
    function handleClick(e) {
        console.log(e.target);
    }
    return <button type="button" onClick={handleClick} >{children}</button>
}


function ButtonV2({ children }) {

    return <button type="button" onClick={(e) => {
        console.log("Btn v2");
    }} >BtnV2{children}</button>
}


function ButtonV3({ children }) {

    return <button type="button" onClick={(e) => {
        alert("BtnV3")
    }} >BtnV3{children}</button>
}

function MessageButton({ message, children }) {
    return (
        <button type="button" onClick={() => console.log(message)}>{children}</button>
    );
}

// --- Passing event handler callback functions as props ---
function BaseButton({ onSmash, children }) {
    return (
        <button onClick={onSmash}>{children}</button>
    );
}
function PlayButton() {
    function handlePlay() {
        alert("Oyun basladi")
    }
    return <BaseButton onSmash={handlePlay}>Play</BaseButton>
}


function UploadButton() {
    function handlePlay() {
        alert("Downloading..")
    }
    return <BaseButton onSmash={handlePlay}>Upload</BaseButton>
}

// --- Event propagation ---
function NavBar() {
    const navbarStyle = {
        border: "2px solid red",
        backgroundColor: "pink",
        padding: "16px"
    }
    return (
        <nav style={navbarStyle} onClick={() => alert("Ben navbar, selam.")}>
            <button type="button" onClick={(e) => {
                e.stopPropagation();
                alert("Ben buton1, selam");
            }}>Butonum</button>

            <button type="button" onClick={(e) => {
                e.stopPropagation();
                alert("Ben buton2, selam");
            }}>Butonum2</button>
        </nav>
    )
}




// --- Event preventing default ---
function FrmLogin() {
    return (
        <form onSubmit={(e) => { e.preventDefault(); console.log("Deneme"); }}>
            <h2>Uye girisi</h2>
            <input type="text" name="firtName" value="" placeholder="Adiniz" />
            <input type="text" name="lastName" value="" placeholder="Soyadiniz" />
            <button type="submit">Kaydet</button>
            <button type="reset">Bilgileri Sil</button>


            <a href="google.com" onClick={(e) => { e.preventDefault(); console.log("google tiklandi"); }}>google</a>

        </form>
    )
}