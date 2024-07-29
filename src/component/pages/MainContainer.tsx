import React from 'react';
import SafetyEducation from "../imageContainer/SafetyEducation";
import EnforcementOfLaws from "../imageContainer/EnforcementOfLaws";
import MajorDisaster from "../imageContainer/MajorDisaster";
import HeatIllness from "../imageContainer/HeatIllness";
import WorkTools from "../imageContainer/WorkTools";
import DangerSigns from "../imageContainer/DangerSigns";
import ForeignWorkers from "../imageContainer/ForeignWorkers";
import PicturePoster from "../imageContainer/PicturePoster";
import SelectMenu from "../menu/SelectMenu";

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

	const [selectedMenu, setSelectedMenu] = React.useState({menu: 0, vertical: false})

	const ComponentArray = [
		<SafetyEducation vertical={selectedMenu.vertical}/>,
		<EnforcementOfLaws vertical={selectedMenu.vertical}/>,
		<MajorDisaster vertical={selectedMenu.vertical}/>,
		<HeatIllness vertical={selectedMenu.vertical}/>,
		<WorkTools vertical={selectedMenu.vertical}/>,
		<DangerSigns vertical={selectedMenu.vertical}/>,
		<ForeignWorkers vertical={selectedMenu.vertical}/>,
		<PicturePoster vertical={selectedMenu.vertical}/>
	]


	return (
		<div>
			<SelectMenu selectedMenu={setSelectedMenu}/>
			<div onClick={()=>setFullScreen(!fullscreen)}>
				{ComponentArray[selectedMenu.menu]}
				{/*<SafetyEducation vertical={selectedMenu.vertical}/>*/}
				{/*<EnforcementOfLaws vertical={selectedMenu.vertical}/>,*/}
				{/*<MajorDisaster vertical={selectedMenu.vertical}/>*/}
				{/*<HeatIllness vertical={selectedMenu.vertical}/>*/}
				{/*<WorkTools vertical={selectedMenu.vertical}/>*/}
				{/*<DangerSigns vertical={selectedMenu.vertical}/>*/}
				{/*<ForeignWorkers vertical={selectedMenu.vertical}/>*/}
				{/*<PicturePoster vertical={selectedMenu.vertical}/>*/}
			</div>
		</div>






		// <div>
		// 	{/*<SafetyEducation/>*/}
		// 	{/*<EnforcementOfLaws/>*/}
		// 	{/*<MajorDisaster/>*/}
		// 	{/*<HeatIllness/>*/}
		// 	{/*<WorkTools/>*/}
		// 	{/*<DangerSigns/>*/}
		// 	{/*<ForeignWorkers/>*/}
		// 	{/*<PicturePoster/>*/}
		// </div>
	);
};

export default MainContainer;

