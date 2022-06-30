import React from "react";

import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const CurrentAlbum = props => {
  
    const { id } = useParams();

    const chosenAlbum = props.allAlbums.find(album => album.id === id);


    if (chosenAlbum) {
        return ( 
            <div>My ID is {chosenAlbum.id}. My title is {chosenAlbum.title}. My year is {chosenAlbum.year}.</div>
        )
   
    } else {
        return (
            <NotFound />
        )
    }
}

export default CurrentAlbum;