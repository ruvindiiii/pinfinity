import { NavLink } from "react-router-dom";

function LogIn() {
  return (
    <>
      <div>This is the Login Page</div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
    </>
  );
}
export default LogIn;
