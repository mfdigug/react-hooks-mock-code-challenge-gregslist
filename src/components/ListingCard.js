import React from "react";

function ListingCard({listItem}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listItem.image} alt={listItem.description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listItem.description}</strong>
        <span> · {listItem.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
