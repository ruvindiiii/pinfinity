import { NavLink } from "react-router-dom";

function LogIn() {
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <h1 className="mb-10">Login</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <div className="flex items-center justify-between">
            <button
              className="bg-black-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-black-500 hover:text-black-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LogIn;
