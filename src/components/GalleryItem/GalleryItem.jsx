import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import swal from '@sweetalert/with-react'



function GalleryItem ({galleryItem, getGalleryList}){
    
    //Put Route to update like count
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
    } //end Put Route
    
    //This function toggles between front and back of image card
    const[backIsVisible, setBackIsVisible] = useState(true);
    const showBackOfImage = () =>{
        setBackIsVisible(!backIsVisible);
    }

    //This is my delete route for an image
    const deleteImage = () =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this image!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios ({
                    method: 'DELETE',
                    url: `gallery/delete/${galleryItem.id}`
                })
                .then((response) => {
                    getGalleryList();
                })
                .catch((error) =>{
                    console.log('error deleting image', error);
                })
                
              swal("Your image has been deleted", {
                icon: "success",
              });
            } else {
              swal("That image is safe!");
            }
          });
        }//end delete Route
    
   
    return(
    
        //I added tooltips to help a user know where to click
        //I used icons instead of traditional text/buttons
    <section className='flexItem'>
        <div onClick={showBackOfImage}>
         {backIsVisible ? 
            <Tooltip placement='bottom' title="Click the image for more info">
                <img src={galleryItem.path}/>
            </Tooltip> : 
            <Tooltip placement='bottom' title="Click the text to see image again">
                <p className='flippedCard'>{galleryItem.description}
                </p>   
            </Tooltip>}
        </div>
       
        <div className='reactSection'>
            <section className='likeArea'>
                <Box>
                    <p>
                        <IconButton sx={{mr: 0}} 
                            onClick={ () => {updateLikeCount(galleryItem)}}>
                                <FavoriteBorderIcon>
                                </FavoriteBorderIcon>
                        </IconButton> {galleryItem.likes}
                    </p>
                 </Box>
                
                       <IconButton onClick={ () => {deleteImage(galleryItem)}}>
                            <DeleteIcon sx={{mr: 0}} 
                            className="trash">
                            </DeleteIcon>
                        </IconButton>
                </section>
        </div>
    </section>
   
   )

}
export default GalleryItem;

