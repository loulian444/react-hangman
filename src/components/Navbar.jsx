import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={"/"}>Game</Link>
      <Link to={"/instructions"}>Instructions</Link>
    </>
  );
};

export default Navbar;
