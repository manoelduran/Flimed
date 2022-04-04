import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Note from "../pages/Note";
import Login from '../pages/Login'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/home/:title" element={<Note />} />
  </Routes>
);

export default Rotas;