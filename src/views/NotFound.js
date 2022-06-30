import React from "react";
import { Link, useHistory } from "react-router-dom"

const NotFound = () => {
    const history = useHistory();

    console.log("history object!", history);

    return (
        <div className="not-found">
            <h1>404 Error - Page Not Found!</h1>

            <div className="back-link">
                
                <button onClick={history.goBack}>Go Back</button>
            </div>

        </div>
    )
}

export default NotFound;