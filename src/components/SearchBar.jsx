import React from "react";
// ✅ Correct MUI icon import (default export)
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <form className="tp-search" onSubmit={(e) => e.preventDefault()}>
      <SearchIcon className="tp-search__icon" />
      <input type="text" placeholder="Search" />
    </form>
  );
}
