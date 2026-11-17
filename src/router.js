import HomePage from "./pages/home.js";
import LoginPage from "./pages/login.js";

const routes = [
  { pattern: /^\/$/, render: HomePage, public: true },
  { pattern: /^\/login$/, render: LoginPage, public: true },
];

function getPath() {
  const hashPath = window.location.hash.slice(1) || "/";
  const path = hashPath.split("?")[0];

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedPath.replace(/\/+$/, "") || "/";
}

export function renderRoute() {
  const path = getPath();
  const route = routes.find(({ pattern }) => pattern.test(path));

  if (route) {
    const match = path.match(route.pattern);
    return {
      content: route.render(match),
    };
  }

  return {
    content: /*HTML*/ `
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
    `,
  };
}

export function startRouter(onRouteChange) {
  window.addEventListener("hashchange", onRouteChange);
  onRouteChange();
}
