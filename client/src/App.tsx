import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Globe from "./pages/Globe";
import Success from "./pages/Success";
import TermsService from "./pages/TermsService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/globe" element={<Globe />} />
        <Route path="/success" element={<Success />} />
        <Route path="/terms" element={<TermsService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;