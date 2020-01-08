import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    
    
  }));
  
  export default function PhotoItems(props) {
  
    const classes = useStyles();

// const photoItems = (props) => {
    console.log("I ma in photolist",props.photoItems )
    console.log("I ma in photolist",props.photoItems.photoArray )

    return(
        <div>
            {(props.photoItems.photoArray || []).map((photo,i) => (
                <img key={i} src={photo.urls.regular} alt={photo.alt_description} />
            ))}
        </div>
    ) 
}

// export default PhotoItems;
  