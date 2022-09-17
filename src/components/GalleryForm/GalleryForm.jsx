import Input from '@mui/material/Input';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


function GalleryForm (){
    return(
        <form>
            <TextField label="Enter the Image URL" variant ="outlined">
                <Input ></Input>
            </TextField>
                <Button className='button' variant="contained">Add Image</Button>
        </form>
    )
}


export default GalleryForm;