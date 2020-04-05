import React from "react";
import "./style.css";
import SearchForm from "../SearchForm";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Employee Directory
      </a>
      <SearchForm />
    </nav>
  );
}

export default Navbar;
