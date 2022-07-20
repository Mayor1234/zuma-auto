import React, { useEffect, useState } from "react";

const SearchComponent = ({ items }) => {
  // const [productsData, setProductsData] = useState([]);
  // const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   // products.products.map((item) => {
  //   //   return setProductsData(item.items.title);
  //   // });
  //   setProductsData(items);
  // }, []);

  // useEffect(() => {});

  // const SearchItem = (searchValue) => {
  //   setSearchInput(searchValue);
  //   productsData.filter((filterItem) => {
  //     return Object.values(filterItem)
  //       .join("")
  //       .toLowerCase()
  //       .includes(searchInput.toLowerCase());
  //   });
  // };
  // const handleSearch = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="row mt">
      {/* <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => SearchItem(e.target.value)}
        />
        <button type="submit">Search</button>
      </form> */}
    </div>
  );
};

export default SearchComponent;
