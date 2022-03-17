import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/about";
import Login from "./Components/Login/login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Progress from "./Components/Progress/progress";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
