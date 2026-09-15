import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPage from "./pages/About.tsx";
import Home from "./Home.tsx";
import ProjectsPage from "./pages/Projects.tsx";
import BrindavanPage from "./pages/BrindavanPage.tsx";
import RaagaPage from "./pages/RaagaPage.tsx";
import PrakrithiPage from "./pages/PrakruthiPage.tsx";
import VrukshaPage from "./pages/Vruksha.tsx";
import ParvaPage from "./pages/ParvaPage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import TermsOfServicePage from "./pages/TermsOfService.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects"  element={<ProjectsPage />} />
          <Route path="/projects/brindavan" element={<BrindavanPage />} />
          <Route path="/projects/raaga" element={<RaagaPage />} />
          <Route path="/projects/prakruthi" element={<PrakrithiPage />} />
          <Route path="/projects/vruksha" element={<VrukshaPage />} />
          <Route path="/projects/parva" element={<ParvaPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
