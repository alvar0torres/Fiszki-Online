import { BrowserRouter, Route, Routes } from "react-router-dom";

import LearnPage from "./pages/LearnPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LearnPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

