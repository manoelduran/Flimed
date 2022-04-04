import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Note from "../pages/Note";
import Login from '../pages/Login'
import { useAuth } from "../hooks/useAuth";

const Rotas = () => {
  const { user } = useAuth();
  return (
    <Routes>
      {user?.id ?
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/home/:title" element={<Note />} />
        </>
        :
        <Route path="/" element={<Login />} />
      }
    </Routes>
  );
};

export default Rotas;