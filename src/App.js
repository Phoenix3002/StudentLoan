import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Home from "./components/home";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
