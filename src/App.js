import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/index";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
