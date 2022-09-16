import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList  from '../GalleryList/GalleryList.jsx';


function App() {
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
      getGalleryList();
  }, [])

  
  const getGalleryList = () => {
    axios({
        method: 'GET',
        url:'/gallery'
    })
    .then((response) => {
      setGalleryList(response.data);
      console.log(galleryList);
    })
    .catch((error) => {
      console.log('error in getGalleryList route', error);
    })
 }
  
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
        galleryList={galleryList}
        getGalleryList={getGalleryList} />
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
