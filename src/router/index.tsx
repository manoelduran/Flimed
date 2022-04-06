import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Note from "../pages/Note";
import Login from '../pages/Login'

const Rotas = () => {
  return (
    <Routes >
      <Route path="/" element={<Login />} />
      < Route path="/home" element={< Home />} />
      < Route path="/:id" element={< Note />} />
    </Routes>
  );
};

export default Rotas;