import Game from "./Game.jsx";
import Instructions from "./Instructions.jsx";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </>
  );
};

export default Router;
