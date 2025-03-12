import { ChangeEvent, useState } from "react";
import { NavLink } from "react-router-dom";

type SearchBarProps = {
  setSearchKey: (key: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const [inputVal, setInputVal] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };

  const handleSearchBtn = () => {
    props.setSearchKey(inputVal);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.setSearchKey(inputVal);
    }
  };

  console.log(inputVal);
  return (
    <div className="flex flex-row justify-between items-center mb-10">
      <NavLink to="/">
        <img src="pinterest.png" className="object-scale-down h-14" />
      </NavLink>
      <input
        className="h-10 w-full mx-5 rounded-md bg-white text-black pl-5 search-bar border-gray-400 border-2 border-solid"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></input>
      <button
        className="mr-5 bg-black px-3 py-2 rounded-md search-btn"
        onClick={handleSearchBtn}
      >
        Search
      </button>
      <NavLink
        to="/login"
        className="mr-2 px-3 py-2 bg-black rounded-md login-btn"
      >
        <button>Login</button>
      </NavLink>
    </div>
  );
}
export default SearchBar;
