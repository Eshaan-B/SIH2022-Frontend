import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/about";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Progress from "./Components/Progress/progress";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
