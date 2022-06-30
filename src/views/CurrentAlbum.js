import React from "react";
// useParams hook
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const CurrentAlbum = props => {
    // Get our ":id" parameter (see Route 7 in App.js!) using object destructuring
    // E.g. If the user clicked a link that went to "/albums/new-album/2"...
    // The value of "id" would be "2".
    // Note that we cannot know in advance which link in <Albums /> the user will click!
    // * But now, using the parameter, we can find out what the user clicked AFTER they do so...
    // * ... And render the correct content.
    const { id } = useParams();

    // ! Alternative to using object destructuring - takes longer!
    // const params = useParams();
    // const id = params.id;

    // Find the album the user clicked on (the album with the same "id" as the ":id" parameter)
    const chosenAlbum = props.allAlbums.find(album => album.id === id);

    // If the user finds an album...
    // Render the details of that album
    if (chosenAlbum) {
        return ( 
            <div>My ID is {chosenAlbum.id}. My title is {chosenAlbum.title}. My year is {chosenAlbum.year}.</div>
        )
    // If the user tries to find an album which doesn't exist, e.g. via "/albums/new-album/999"...
    // Render a <NotFound /> component
    } else {
        return (
            <NotFound />
        )
    }
}

export default CurrentAlbum;