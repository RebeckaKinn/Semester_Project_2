import "./styles/output.css";
import { renderRoute, startRouter } from "./router.js";

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
