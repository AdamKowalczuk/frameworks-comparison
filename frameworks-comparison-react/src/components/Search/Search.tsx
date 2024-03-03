import React from "react";
import "./Search.scss";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  value: string;
  onChange: any;
}

const Search = ({ placeholder, onSearch, value, onChange }: SearchProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };
  return (
    <div className="search-container">
      <input
        type="search"
        className="input-search"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default Search;
