import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchBy, setSearchBy] = useState("")
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
      <Header setSearchBy={setSearchBy}/>
      <ListingsContainer 
        listings={listings} 
        searchBy={searchBy} 
        onHandleDeleteListing={onHandleDeleteListing}
      />
    </div>
  );
}

export default App;
