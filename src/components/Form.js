// * Exercise 5.3. Import "useContext"
import React, { useContext } from "react";
// *Exercise 5.4. Import context from App.js
import { AlbumsContext } from "../App";

// * Exercise 4 Explainer: 
// Created a new Form component to allow the user to create a new album and add it to the list of albums in App.js
// Note that the "value" attribute of each <input> is set to track the value of a *state variable* in App.js.
// As the user updates each input, they update the *state variable*.
// This causes the app to re-render. So the input is re-rendered with a new "value" based on the state variable.
// Submitting the form adds a new album object to the state array of albums in App.js and resets the "input" state variables.
// Remember: this is the correct "React way" to manage data in your React app. :-)

const Form = () => {
    // * Exercise 5.5. "Consume" (use) the context provided by App.js
    // * Now all data from App.js will be accessed through the "albums" variable, instead of props
    const albums = useContext(AlbumsContext);

    // Function to add a new album to the state array of albums in App.js
    const updateAlbums = event => {
        event.preventDefault();

        let newAlbum = {
            // Create an id for the new album based on the existing number of albums +1
            // This is not ideal, but as we cannot delete an album/change the list it will be ok for now!
            // In the next module, we will talk more about how to create unique ids. :-)
            id: (albums.allAlbums.length + 1).toString(),
            title: albums.newTitle,
            year: albums.newYear
        }

        albums.update(newAlbum);
    }

    // Function to update the state variable in App.js managing the title of a new album the user is creating
    const updateNewTitle = event => {
        albums.updateTitle(event.target.value);
    }

    // Function to update the state variable in App.js managing the year of a new album the user is creating
    const updateNewYear = event => {
        albums.updateYear(event.target.value);
    }
    
    // Create the JSX and logic for the form which lets the user create and add a new album
    return (
        <div className="form_container">
            <form onSubmit={updateAlbums}>
                <h2>Add a new album</h2>
                <div className="form_div">
                    <input placeholder="Enter the album name" value={albums.newTitle} onChange={updateNewTitle} />
                </div>
                <div className="form_div">
                    <input placeholder="Enter the year of release" value={albums.newYear} onChange={updateNewYear} />
                </div>
                <div className="form_div">
                    <button className="form_button">Add new album</button>
                </div>
            </form>
        </div>
    );
}

export default Form;