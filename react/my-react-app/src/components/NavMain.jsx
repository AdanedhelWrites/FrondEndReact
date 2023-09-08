import styles from "../assets/NavMain.module.css";

export const NavMain = ({ setUrl, url }) => {
    return <nav className={styles.NavMain}>
        <ul>
            <li>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setUrl("01");
                }} >1</a>
            </li>
            <li>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setUrl("02");
                }}>2</a>
            </li>
            <li>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setUrl("03");
                }}>3</a>
            </li>

        </ul>
    </nav>
}