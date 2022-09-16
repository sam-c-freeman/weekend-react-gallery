import {useState} from 'react';
import axios from 'axios';



function GalleryItem ({galleryItem, getGalleryList}){
    console.log(galleryItem);
    const updateLikeCount = () =>{
       axios({
        method: 'PUT',
        url: `/gallery/like/${galleryItem.id}`,
       })
       .then((response) => {
        getGalleryList();
       })
       .catch((error) => {
        console.log('Error in put route to update count', error);
       })
    }


    const[backIsVisible, setBackIsVisible] = useState(true);
    const showBackOfImage = () =>{
        setBackIsVisible(!backIsVisible);
    }
   
//probably will be bad to have it as a div like that
    return(
    <>
        <div onClick={showBackOfImage}>
         {backIsVisible ? <img src={galleryItem.path}/> : <p>{galleryItem.description}</p>}   
    
        </div>
       
       
        {/* <div onClick={showBackOfImage}>
         {backIsVisible ? <img src={galleryItem.path}/> : <p>{galleryItem.description}</p>}   
    
        </div> */}
        <div className='reactSection'>
            <button onClick={updateLikeCount}>Like Me!</button>
            <p>This many likes: {galleryItem.likes}</p>
        </div>
    </>
   )
   
}
export default GalleryItem;

{/* <div className='reactSection'>
            <button onClick={updateLikeCount}>Like Me!</button>
            <p>This many likes: {likeCount}</p>
        </div> */}