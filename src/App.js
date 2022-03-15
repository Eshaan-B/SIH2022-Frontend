import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/about";
import Login from "./Components/Login/login";
import SignUp from "./Components/SignUp/signup";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
