import { useState } from "react";
import "./App.css";
import Router from "./components/Router.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [displayArray, setDisplayArray] = useState([]);
  const [numRemainingGuesses, setNumRemainingGuesses] = useState(undefined);
  const [letterGraveyardList, setLetterGraveyardList] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  // correctGuesses probably not needed

  return (
    <>
      <Navbar />
      <Router />
    </>
  );
};

export default App;
