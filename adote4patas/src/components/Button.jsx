import { Button } from "@mui/material";

function Btn({content}){
    return(
        <Button variant="contained" sx={{backgroundColor: '#F7DB05', color: 'black', fontWeight: 'bold'}}> {content} </Button>
    );
}

export default Btn;