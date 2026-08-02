function SearchBar({ setSearch }) {
  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search Projects"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;