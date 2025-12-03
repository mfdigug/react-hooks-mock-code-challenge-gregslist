import React, { useState } from "react";

function ListingCard({ listItem, onHandleDeleteListing }) {

  const [liked, setLiked] = useState(false)

  function onStarClick() {
    setLiked(!liked)
  }

  function handleDeleteListing(){
    fetch(`http://127.0.0.1:6001/listings/${listItem.id}`, {
      method: "DELETE"
     })
    onHandleDeleteListing(listItem.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listItem.image} alt={listItem.description} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active" onClick={onStarClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={onStarClick}>☆</button>
        )}
        <strong>{listItem.description}</strong>
        <span> · {listItem.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
