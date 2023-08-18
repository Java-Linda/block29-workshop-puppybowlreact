export const SearchResult = ({ result }) => {
    console.log("I'm from search result", result);
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
      >
      {result}
    </div>
  );
};