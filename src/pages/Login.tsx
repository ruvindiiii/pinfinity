import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-black">
      <h1 className="mb-10 text-black text-4xl font-medium">Login</h1>
      <form className="bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="bg-white shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder=""
          />
        </div>
        <div className="flex items-center justify-center">
          <NavLink to="/">
            <button
              className="mr-10 px-3 py-2 bg-black text-white font-bold rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign in
            </button>
          </NavLink>
          <a
            className="inline-block align-baseline font-bold text-sm text-black-500 hover:text-black-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
export default Login;
