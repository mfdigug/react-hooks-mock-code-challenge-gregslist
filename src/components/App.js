import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:6001/listings")
    .then((r) => r.json())
    .then((data) => setListings(data))
  }, [])


  function onHandleDeleteListing(id){
      const updatedListings = listings.filter(listing => listing.id !==id)
      setListings(updatedListings)
    }
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onHandleDeleteListing={onHandleDeleteListing}/>
    </div>
  );
}

export default App;
