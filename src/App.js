import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/sobre", element: <AboutPage /> },
  { path: "/projetos", element: <ProjectsPage /> },
];

export default function App() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<Layout />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </UserProvider>
  );
}
