import Game from "./Game.jsx";
import Home from "./Home.jsx";
import Instructions from "./Instructions.jsx";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </>
  );
};

export default Router;
