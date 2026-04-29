import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}
