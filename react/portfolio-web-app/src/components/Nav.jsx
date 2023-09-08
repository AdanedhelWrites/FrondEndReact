import { NavLink } from "react-router-dom"

export function AdminNav() {
    return (
        <nav>
            <ul>
                <li><NavLink className="btn bordered" to="/admin">Dashboard</NavLink></li>
                <li><NavLink className="btn bordered" to="/admin/works">Works</NavLink></li>
                <li><NavLink className="btn bordered" to="/admin/users">Users</NavLink></li>
            </ul>
        </nav >
    )
}