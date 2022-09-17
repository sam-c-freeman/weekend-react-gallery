import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

import GalleryItem  from '../GalleryItem/GalleryItem.jsx';


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