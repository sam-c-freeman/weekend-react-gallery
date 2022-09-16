import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import GalleryItem  from '../GalleryItem/GalleryItem.jsx';


function GalleryList ({galleryList, getGalleryList}){
    console.log(galleryList);
    return(
      <ImageList sx={{width:1000, height: 1000}}>
        {galleryList.map((galleryItem) => (
        <ImageListItem key={galleryItem.id}>
          <img
          src={`${galleryItem.path}?w=248&fit=crop&auto=format`}
          srcSet={`${galleryItem.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          // alt={galleryItem.title}
          loading="lazy"
          />
          <ImageListItemBar
            title={galleryItem.description}
            subtitle={<span>by: {galleryItem.Id}</span>}
            position="below"
          />
          </ImageListItem>
    
      ))}
      </ImageList>
    );
  }
  
   


    // return(
    //     <div className='imageArea'>
    //   {galleryList.map(galleryItem => {
    //     return(
    //         <GalleryItem key={galleryItem.id}
    //         galleryItem={galleryItem}
    //         getGalleryList={getGalleryList}/>
    //     )
    //   })}
    //     </div>
    // );
// }  //This may have been needed before?

export default GalleryList;


// function GalleryList ({galleryList}){
//     console.log(galleryList);
   
//     return(
//         <ul>
//         {galleryList.map(galleryItem => {
//             return(
//             <li>{galleryItem.description}</li>
//             )
//         })}
//         </ul>
//     );
    
// }