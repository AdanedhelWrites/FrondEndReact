import "./assets/style/reset.css";
import "./App.css";

import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Page01 } from "./pages/Page-01-Js-In-Jsx";
import { Page02 } from "./pages/Page-02-Passing-Promps";
import { Page03 } from "./pages/Page-03-Conditional-Rendering";
import { Page04 } from "./pages/Page-04-Rendering-List";
import { Page05 } from "./pages/Page-05-Keeping-components-pure";
import { Page06 } from "./pages/Page-06-Interaction";
import { MenuSocial } from "./components/MenuSocial";

export function App() {
  const url = "/06";
  let activePage;
  if (url === "/01") {
    activePage = <Page01 />;
  }
  else if (url === "/02") {
    activePage = <Page02 />
  } else if (url === "/03") {
    activePage = <Page03 />
  } else if (url === "/05") {
    activePage = <Page05 />
  } else if (url === "/06") {
    activePage = <Page06 />
  } else {
    activePage = <Page04 />
  }

  return (
    <>
      <header className="basic-header">
        <Logo />
        <Menu />
      </header>
      <main>
        {activePage}
      </main>
      <footer>
        <MenuSocial />
      </footer>
    </>
  );
}



//yapamazsın
// function InvalidShape() {
//   const tagName = "div";

//   return < { tagName } >
// }