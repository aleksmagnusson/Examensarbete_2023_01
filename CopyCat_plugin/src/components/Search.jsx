import * as React from "react";
import "./Search.css";
import search from "../assets/search.svg";
const Search = (props) => {
  return (
    <div className={`search ${props.className || ""}`}>
      <img className="search-1" {...props.search} src={search} />
      <span className="search-2">{props.search || "SEARCH"}</span>
    </div>
  );
};
export default Search;
