import React, { useState } from "react";

function ListingCard({listItem}) {

  const [liked, setLiked] = useState(false)

  function onStarClick() {
    setLiked(!liked)
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
