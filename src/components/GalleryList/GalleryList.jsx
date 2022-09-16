import GalleryItem  from '../GalleryItem/GalleryItem.jsx';

function GalleryList ({galleryList, getGalleryList}){
    console.log(galleryList);

  
   
    return(
        <div className='imageArea'>
      {galleryList.map(galleryItem => {
        return(
            <GalleryItem key={galleryItem.id}
            galleryItem={galleryItem}
            getGalleryList={getGalleryList}/>
        )
      })}
        </div>
    );
}

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