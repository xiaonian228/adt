import React from 'react';
import SafetyEducation from "../imageContainer/SafetyEducation";

const MainContainer = () => {

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
		<div>
			<SafetyEducation/>
		</div>
	);
};

export default MainContainer;
