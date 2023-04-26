import React, { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.scss";

interface SearchProps {
  onSearch: (e: any) => void;
  searchValue: string;
  placeholder: string;
  onFocus?: (e: any) => void;
}

const SearchBox: FC<SearchProps> = (props) => {
  return (
    <div className="searchBox">
      <input
        placeholder={props.placeholder}
        value={props.searchValue}
        type="text"
        onChange={props.onSearch}
        className="search-input"
        onFocus={props.onFocus}
      />
      <span className="searchBox-btn"><SearchIcon /></span>
    </div>
  );
};

export default SearchBox;
