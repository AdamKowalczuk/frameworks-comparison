import React, { useState } from "react";
import "./Search.scss";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

interface SearchProps {
  placeholder?: string;

  onSearch: (query: string) => void;
}

const Search = ({ placeholder, onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };
  return (
    <div className="search-container">
      <input
        type="search"
        className="input-search"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default Search;
