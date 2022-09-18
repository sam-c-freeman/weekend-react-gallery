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
    // let [likeCount, setLikeCount] = useState(galleryItem.likes);
    
    // console.log(galleryItem);
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
        }
    
   
//probably will be bad to have it as a div like that
    return(
    
    <section className='flexItem'>
        <div onClick={showBackOfImage}>
         {backIsVisible ? <Tooltip placement='bottom' title="Click the image for more info"><img src={galleryItem.path}/></Tooltip> : <p className='flippedCard'>{galleryItem.description}</p>}   
    
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

