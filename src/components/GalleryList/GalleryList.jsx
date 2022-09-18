import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

import GalleryItem  from '../GalleryItem/GalleryItem.jsx';



//this function creates the new gallery items that are displayed in this 
//component
function GalleryList ({galleryList, getGalleryList}){
    console.log(galleryList);
    
    return(
        <div className='imageArea'>
      {galleryList.map(galleryItem => {
        return(
            <GalleryItem key={galleryItem.id}
            galleryItem={galleryItem}
            getGalleryList={getGalleryList} className='galleryItem'/>
        )
      })}
        </div>
    );


  }
  


export default GalleryList;

