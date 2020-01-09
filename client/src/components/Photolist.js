import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    
    
  }));
  
export default function PhotoItems(props) {
  
const classes = useStyles();

    return(
        <div>
            {(props.photoItems.photoArray || []).map((photo,i) => (
                <img key={i} src={photo.urls.regular} alt={photo.alt_description} />
            ))}
        </div>
    ) 
}

  