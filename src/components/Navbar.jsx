import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/game"}>Game</Link>
      <Link to={"/instructions"}>Instructions</Link>
    </>
  );
};

export default Navbar;
