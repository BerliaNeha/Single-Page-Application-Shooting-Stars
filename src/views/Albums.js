import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const Albums = props => {
    // Render a list of some of Black Sabbath's albums
    return (
        <div className="albums_container">
            <ul className="albums_list">
                {
                    props.allAlbums.map(albumObj => {
                        return (
                            // For every "album" object in the "albums" state array, create a React Router <Link />
                            // This time, the "to" prop does not go to a static URL...
                            // Instead, each <Link /> goes to a path based on each album's unique id property.
                            // E.g. The first Link, based on the first "album" object (id 1) will have the path "/albums/new-album/1"
                            // Etc...
                            <li key={albumObj.id}>
                                <Link to={`/albums/new-album/${albumObj.id}`}>{albumObj.title} ({albumObj.year})</Link>
                            </li>
                        );
                    })
                }
            </ul>

            {/* 
            Created a Form component so the user can create a new album and add it to the list of albums.
            Also gave the Form component props so it can access/update state variables in App.js 
            */}
            <Form
                allAlbums={props.allAlbums}
                newTitle={props.newTitle}
                newYear={props.newYear}
                update={props.update}
                updateTitle={props.updateTitle}
                updateYear={props.updateYear}
            />
        </div>
    );
}

export default Albums;