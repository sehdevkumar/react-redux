import React from 'react'
import './Loader.css'
function Loader() {
    return (
      <>
        <center>
          {" "}
          <img
            className="loader"
            src="https://s3.amazonaws.com/quipslib/load.gif"
            alt="Loading..."
          />
        </center>
      </>
    );
}

export default Loader
