import { useState } from "react";
import { login } from "../../Api";
import { useNavigate } from "react-router";




export function Login({ onSetToken }) {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    function handleLoginSubmit(e) {
        e.preventDefault();
        login(credentials).then((token) => {
            if (token) {
                onSetToken(token);
                localStorage.setItem("token", JSON.stringify(token));
                console.log(localStorage.getItem("token"));
                navigate("/admin")
            }

        });
    }
    return <form onSubmit={handleLoginSubmit}>
        <h2>Welcome To Login Page</h2>
        <input type="text" name="username" id="username" placeholder="Kullanici adinizi giriniz"
            value={credentials.username} onChange={handleChange} />

        <input type="password" name="password" id="password" placeholder="Sifrenizi giriniz" value={credentials.password} onChange={handleChange} />

        <button type="submit">Login</button>
    </form>
}