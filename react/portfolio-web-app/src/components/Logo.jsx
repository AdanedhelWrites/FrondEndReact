import { NavLink } from "react-router-dom";

export function Logo() {
    const style = {
        backgroundColor: "var(--clr-primary)",
        display: "block",
        textAlign: "center",
        padding: "16px",
        color: "black",
    }
    return <NavLink to="/admin" className="logoAdmin" style={style}><img width="60px" src="/images/ravenlogo.png" alt="" /></NavLink>

}