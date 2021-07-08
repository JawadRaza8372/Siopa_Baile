import React from 'react'
import "./LoadingComponent.css"
import AutorenewIcon from '@material-ui/icons/Autorenew';
function LoadingCompnent() {
    return (
        <div style={{display:"grid",placeItems:"center",height:"90vh",overflow:"hidden",background:'transparent'}}>

        <div>
        <center>
        <AutorenewIcon className="App-logo" style={{fontSize:"100px"}}/>
        <br/>
        <h2>Loading Please Wait.</h2>
        </center>
     
        </div>
        </div>
    )
}

export default LoadingCompnent
