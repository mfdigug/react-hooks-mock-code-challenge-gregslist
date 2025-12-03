import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings, onHandleDeleteListing} ) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listItem) => (
          <ListingCard key={listItem.id} listItem={listItem} onHandleDeleteListing={onHandleDeleteListing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
