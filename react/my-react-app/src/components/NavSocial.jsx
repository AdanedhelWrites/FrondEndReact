import styles from "../assets/NavSocial.module.css"
import { iconGithub } from "./Icons"

export function NavSocial() {
    return <nav className={styles.NavSocial}>
        <h2>Social Connections</h2>
        <ul>
            <li>
                <a href="#">
                    {iconGithub}
                </a>
            </li>
        </ul>
    </nav>
}