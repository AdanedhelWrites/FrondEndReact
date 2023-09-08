import "./assets/reset.css"
import "./App.css"

import { Logo } from "./components/Logo";
import { NavMain } from "./components/NavMain";
import { NavSocial } from "./components/NavSocial";
import { Page01 } from "./pages/Page-01-Components-Memory";
import { Page02 } from "./pages/Page-02";
import { Page03 } from "./pages/Page-03";
import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("01");
  return (
    <>
      <header>
        <Logo />
        <NavMain setUrl={setUrl} />
      </header>
      <main className="limited-width">
        {url == "01" && <Page01 />}

        {url == "02" && <Page02 />}

        {url == "03" && <Page03 />}

      </main>
      <footer>
        <NavSocial />
      </footer>
    </>
  );
}