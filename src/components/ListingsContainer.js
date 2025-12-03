import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings} ) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listItem) => (
          <ListingCard key={listItem.id} listItem={listItem} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
