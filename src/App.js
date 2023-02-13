import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Register from "./components/register";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
