import { useState } from 'react';
import Input from '@mui/material/Input';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Spacing } from '@mui/system';
import Box from '@mui/material/Box';
import axios from 'axios';
import swal from '@sweetalert/with-react';


function GalleryForm ({getGalleryList}){
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');

    // console.log(imageURL);
    // console.log(description);

const checkInputs = () => {
    if(imageURL === '' || description === ''){
        swal("Error", "Please complete both fields", "error");
    } 
    else{
        addImage();
    }
}
    
 const addImage = () => {
    event.preventDefault();
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                path: imageURL,
                description: description
            }
        })
        .then((response) => {
            getGalleryList();
            clearImageFields();
        
        })
        .catch ((error) => {
            console.log('error in addImage function', error);
        })
    }

    const clearImageFields = () =>{
        setImageURL('');
        setDescription('');
    }

    
    return(
        <form className='form'>
            <Box sx={{mr: 1}}>
                <TextField 
                label="Enter the Image URL" 
                variant ="outlined"
                value={imageURL}
                autoComplete='off'
                onChange={(event) => setImageURL(event.target.value)} >
                    <Input 
                    type="text"
                    className='input'
                    ></Input>
                </TextField>
                
            </Box>
            <Box sx={{mr: 1}}>
                <TextField 
                type="text"
                label="Description" 
                variant ="outlined"
                autoComplete='off'
                value={description}
                onChange={(event) => setDescription(event.target.value)}>
                    <Input ></Input>
                </TextField>
            </Box>
                <Button className='button' variant="contained" onClick={checkInputs}>Add Image</Button>
        </form>
        )
    }



export default GalleryForm;