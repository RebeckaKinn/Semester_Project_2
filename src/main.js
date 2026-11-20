import "./styles/output.css";
import { renderRoute, startRouter } from "./router.js";

//Testing API
import { getListings } from "../tests/apiTest.js";

function Main() {
  const app = document.querySelector("#app");
  const { content } = renderRoute();

  app.innerHTML = /*HTML*/ `
      <section>
        <main>
          ${content}
        </main>
      </section>
    `;
}

startRouter(Main);
getListings();
