import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const Albums = props => {
    return (
        <div className="albums_container">
            <ul className="albums_list">
                {
                    props.allAlbums.map(albumObj => {
                        return (
                            <li key={albumObj.id}>
                                <Link to={`/albums/new-album/${albumObj.id}`}>{albumObj.title} ({albumObj.year})</Link>
                            </li>
                        );
                    })
                }
            </ul>

    
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