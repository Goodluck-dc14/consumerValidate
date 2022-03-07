import "./App.css";
import Register from "./Register/Register";
import Header from "./Register/Header";
import Home from "./Register/Home";
import CreateStore from "./Register/CreateStore";
import Signin from "./Register/Signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateStore />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
