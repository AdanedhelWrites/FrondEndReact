import { Link } from "react-router-dom"

export function NavMain() {
    return <nav>
        <ul>
            <li>
                <Link to="/">MainPage</Link>
            </li>
            <li>
                <Link to="/egzersiz">Egzersiz</Link>
            </li>
            <li>
                <Link to="/egzersiz2">Egzersiz2</Link>
            </li>
            <li>
                <Link to="/egzersiz3">Egzersiz3</Link>
            </li>
            <li>
                <Link to="/egzersiz4">Egzersiz4</Link>
            </li>
        </ul>
    </nav>
}