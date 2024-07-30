import React from 'react';

import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";

const App = () => {

  const [fullscreen, setFullScreen] = React.useState(false)

  React.useEffect(()=>{
    if(fullscreen){
      document.documentElement.requestFullscreen()
    }
    else{
      if(document.fullscreenElement){
        document.exitFullscreen()
      }
    }

  },[fullscreen])

  return (
    <div className="app" style={{background:'#000'}} onClick={()=>setFullScreen(!fullscreen)} >
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
};

export default App;
