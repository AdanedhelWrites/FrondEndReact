import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function FancyButton() {
    // const theme = "dark";
    const theme = useContext(ThemeContext)
    const style = {
        backgroundColor: theme === "dark" ? "orangered" : "blue"
    }
    return (
        <button type="button" style={style}>I AM A FANCY BUTTON</button>
    )
}