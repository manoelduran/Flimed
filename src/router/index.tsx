import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Note from "../pages/Note";
import Login from '../pages/Login'
import { useAuth } from "../hooks/useAuth";

const Rotas = () => {
  return (
    <Routes >
      <Route path="/" element={<Login />} />
      < Route path="/home" element={< Home />} />
      < Route path="/home/:title" element={< Note />} />
    </Routes>
  );
};

export default Rotas;