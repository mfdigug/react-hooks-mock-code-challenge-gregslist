import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings, onHandleDeleteListing, searchBy } ) {
  
  const itemsToDisplay =  listings.filter((listing) => {
    if(searchBy) {
      return listing.description === searchBy
    } else {
      return true;
    }
  });
  


  const filteredListings = listings.filter(listing => {
    return listing.description === searchBy
    });

  console.log(filteredListings)
  
  return (
    <main>
      <ul className="cards">
        {itemsToDisplay.map((listItem) => {
        return <ListingCard key={listItem.id} listItem={listItem} onHandleDeleteListing={onHandleDeleteListing} />})
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
