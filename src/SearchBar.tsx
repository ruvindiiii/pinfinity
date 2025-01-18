import { useState } from "react";
import { NavLink } from "react-router-dom";

function SearchBar(props) {
  const [inputVal, setInputVal] = useState<string>("");

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleSearchBtn = () => {
    props.setSearchKey(inputVal);
  };

  console.log(inputVal);
  return (
    <div className="searchBarContent">
      <img src="pinterest.png" className="object-scale-down h-14 w-56" />
      <input className="searchBar" onChange={handleInputChange}></input>
      <button onClick={handleSearchBtn}>Search</button>
      <NavLink to="/login">
        <button>LogIn</button>
      </NavLink>
    </div>
  );
}
export default SearchBar;
