import React from 'react'
import "./Error.css";
function Error(props) {
    return (
        <>

            <div className="error-message">
                {props.error}
            </div>

        </>
    )
}

export default Error
