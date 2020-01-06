import React from 'react';

const Photolist = (props) => {

    if (props.photoItems) {
        const photo = props.photoItems.map(img => {
            console.log(img);
            return <img key={img.id} src={img.urls.raw} alt={img.alt_description} />
        });

        return (
            <div>{photo}</div>
        )
    }
}

export default Photolist;


    // <div>
    //   <p>{props.photoArray}</p>
    //   {/* <img src={props.photoArray.results[0].urls.raw} alt={props.photoArray.results[0].user.name} ></img> */}
    // </div>
    // <div className={classes.root}>
    //   <GridList cellHeight={180} className={classes.gridList}>
    //     <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    //       <ListSubheader component="div">December</ListSubheader>
    //     </GridListTile>
    //     {photoArray.map(url => (
    //       <GridListTile key={this.results.urls}>
    //         <img src={this.results.urls.raw} alt={this.results.user.name} />
    //         <GridListTileBar
    //           title={this.results.user.name}
    //           subtitle={<span>by: {this.results.user.name}</span>}
    //           // actionIcon={
    //           //   <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
    //           //     <InfoIcon />
    //           //   </IconButton>
    //           // }
    //         />
    //       </GridListTile>
    //     ))}
    //   </GridList>
    // </div>
  