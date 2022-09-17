import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';


function GalleryItem ({galleryItem, getGalleryList}){
    // let [likeCount, setLikeCount] = useState(galleryItem.likes);
    
    console.log(galleryItem);
    const updateLikeCount = (galleryItem) =>{
       axios({
        method: 'PUT',
        url: `/gallery/like/${galleryItem.id}`,
        data: galleryItem
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
       
        <div className='reactSection'>
            <p>
                <section className='likeArea'>
                    <Box>
                    <IconButton sx={{mr: 0}} onClick={ () => {updateLikeCount(galleryItem)}}>
                        <FavoriteBorderIcon>
                        </FavoriteBorderIcon>
                    </IconButton> {galleryItem.likes}
                    </Box>
                
               
                        <DeleteIcon sx={{mr: 0}} className="trash">
                        </DeleteIcon>
                </section>
               
        </p>
            {/* <p><IconButton onClick={likeCounter}><FavoriteBorderIcon></FavoriteBorderIcon></IconButton> {galleryItem.likes}</p> */}
        </div>
        </section>
   
   )

}
export default GalleryItem;

