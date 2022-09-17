import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';




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
    
    <section className='flexItem'>
        <div onClick={showBackOfImage}>
         {backIsVisible ? <Tooltip placement='bottom' title="Click the image for more info"><img src={galleryItem.path}/></Tooltip> : <p className='flippedCard'>{galleryItem.description}</p>}   
    
        </div>
       
       
        {/* <div onClick={showBackOfImage}>
         {backIsVisible ? <img src={galleryItem.path}/> : <p>{galleryItem.description}</p>}   
    
        </div> */}
        <div className='reactSection'>
            {/* <Button className='button'variant="outlined" size="small" onClick={updateLikeCount}>Like</Button> */}
            <p><IconButton onClick={updateLikeCount}><FavoriteBorderIcon></FavoriteBorderIcon></IconButton> {galleryItem.likes}</p>
        </div>
        </section>
   
   )
   
}
export default GalleryItem;

{/* <div className='reactSection'>
            <button onClick={updateLikeCount}>Like Me!</button>
            <p>This many likes: {likeCount}</p>
        </div> */}