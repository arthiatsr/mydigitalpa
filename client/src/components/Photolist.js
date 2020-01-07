import React from 'react';

const photoItems = (props) => {
    console.log("I ma in photolist",props.photoItems )
    console.log("I ma in photolist",props.photoItems.photoArray )


    return(
        <div>
            {(props.photoItems.photoArray || []).map((photo,i) => (
                <img key={i} src={photo.urls.regular} alt={photo.alt_description} />
            ))}
        </div>
        // <div>
        //    {(Object.keys(props.photoArray) || []).map((photoArray,i) => (
        //         <div key={i}>                
        //          <img src={photoArray.urls.raw} alt={photoArray.alt_description} />
        //          </div>
        //      ))}

        // </div>

    ) 
}

export default photoItems;

    // if (props.photoItems) {
    //     const photo = this.props.photoItems.map(
    //         // return <img src={urls.raw} alt={urls.alt_description} />
    //     });

    //     return (
    //         <div>{photo}</div>
    //     )
    // }




//     // <div>
//     //   <p>{props.photoArray}</p>
//     //   {/* <img src={props.photoArray.results[0].urls.raw} alt={props.photoArray.results[0].user.name} ></img> */}
//     // </div>
//     // <div className={classes.root}>
//     //   <GridList cellHeight={180} className={classes.gridList}>
//     //     <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//     //       <ListSubheader component="div">December</ListSubheader>
//     //     </GridListTile>
//     //     {photoArray.map(url => (
//     //       <GridListTile key={this.results.urls}>
//     //         <img src={this.results.urls.raw} alt={this.results.user.name} />
//     //         <GridListTileBar
//     //           title={this.results.user.name}
//     //           subtitle={<span>by: {this.results.user.name}</span>}
//     //           // actionIcon={
//     //           //   <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
//     //           //     <InfoIcon />
//     //           //   </IconButton>
//     //           // }
//     //         />
//     //       </GridListTile>
//     //     ))}
//     //   </GridList>
//     // </div>
  