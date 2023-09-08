export function Page02() {
    return (
        <section>
            <h2>Bir komponente özellikler geçirebilmek. Passing Props to a component</h2>
            <CustomButton content="Deneme" />
            <CustomButton content="Hello" />
            <CustomButton content="Middle" />
            <CustomButton content="Earth" />
            <Card theme="dark" hasBorder={false} size="lg" />
            <h2>Children Property</h2>
            <p>
                Komponentlerimizi iki parçalı(açılış ve kapanış parçaları) yazdıgımızda react çocuk öğeleri children propert adıyla göndericektir!
            </p>
            <NavBar theme="dark" size="lg">test</NavBar>
            <NavBar theme="dark" size="lg">ben baska testim</NavBar>
            <NavBar theme="dark" size="lg">
                <CustomButton content="Navbar btn 1" />
                <CustomButton content="Navbar btn 2" />
                <CustomButton content="Navbar btn 3" />
            </NavBar>
            <h2>Forwarding props via via spread syntax</h2>
        </section>
    );
}

function CustomButton(props) {
    console.log(props)
    return <button type="button"> {props.content}</button >
}

function Card(props) {
    const theme = props.theme;
    const hasBorder = props.hasBorder;
    const size = props.size;
    return <div>I am a card component</div>
}

function Card2(props) {

    return <div>I am a card component {props.theme} {props.size} {props.hasBorder} </div>
}

function Card3({ theme = "dark", size, hasBorder }) {
    return <div>I am a card component</div>
}

function NavBar(props) {
    console.log(props);
    const children = props.children;
    return <nav style={{ border: "2px solid red" }}>{children}</nav>
}

function NavBar2({ theme, size, children }) {
    return (
        <nav>
            {theme} {size} {children}
        </nav>
    );
}

function Profile(props) {

    return (
        <div>
            <Avatar {...props} />
        </div>
    );
}

function Avatar({ person, size, theme, hasBorder, isSepia }) {
    return (
        <div>
            ben Avatar
            <h4>{person}</h4>
        </div>
    )
}