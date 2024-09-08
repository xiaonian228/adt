import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import PageTransition from "../component/transition/PageTransition";
import SafetyEducation from "../component/imageContainer/SafetyEducation";
import EnforcementOfLaws from "../component/imageContainer/EnforcementOfLaws";
import MajorDisaster from "../component/imageContainer/MajorDisaster";
import PicturePoster from "../component/imageContainer/PicturePoster";
// import HeatIllness from "../component/imageContainer/HeatIllness";
import DangerSigns from "../component/imageContainer/DangerSigns";
import ForeignWorkers from "../component/imageContainer/ForeignWorkers";
import WorkTools from "../component/imageContainer/WorkTools";

import MainLayOut from "../component/layout/MainLayOut";

import SafetyAccidentCases from "../component/sectionContainer/SafetyAccidentCases";
import InspectionOfPress from "../component/sectionContainer/InspectionOfPress";
import LawsOnPress from "../component/sectionContainer/LawsOnPress";
import LearnMajorDisaster from "../component/sectionContainer/LearnMajorDisaster";
import HeatIllness from "../component/sectionContainer/HeatIllness";
import IssueContent from "../component/sectionContainer/IssueContent";
import ForeignGroup from "../component/sectionContainer/ForeignGroup";
import SafetyPicture from "../component/sectionContainer/SafetyPicture";
import SafePlaceExample from "../component/sectionContainer/SafePlaceExample";
import SafeForkLift from "../component/sectionContainer/SafeForkLift";
import ArticleThirtyFive from "../component/sectionContainer/ArticleThirtyFive";
import PunishmentQnA from "../component/sectionContainer/PunishmentQnA";
import Corona19 from "../component/sectionContainer/Corona19";
import ConfinedSpace from "../component/sectionContainer/ConfinedSpace";
import ForeignExplosive from "../component/sectionContainer/ForeignExplosive";
import StuckPicture from "../component/sectionContainer/StuckPicture";
import PreventingElectricShock from "../component/sectionContainer/PreventingElectricShock";
import DisasterFiveThings from "../component/sectionContainer/DisasterFiveThings";
import SafeLadder from "../component/sectionContainer/SafeLadder";
import PressSafetyAccident from "../component/sectionContainer/PressSafetyAccident";
import SafetyCertification from "../component/sectionContainer/SafetyCertification";
import PunishmentPromotion from "../component/sectionContainer/PunishmentPromotion";
import WorkSafetyQuiz from "../component/sectionContainer/WorkSafetyQuiz";
import ForeignFalling from "../component/sectionContainer/ForeignFalling";

const Router = () => {
	const location = useLocation()
		// if(location.pathname === '/heat/vertical'){
		// 	localStorage.setItem('totalThumb','1')
		// }
		// else if(location.pathname === '/sign/vertical'){
		// 	localStorage.setItem('totalThumb','2')
		// }
		// else if(location.pathname === '/poster/vertical'){
		// 	localStorage.setItem('totalThumb','3')
		// }
		// else if(location.pathname === '/law/vertical'){
		// 	localStorage.setItem('totalThumb','0')
		// }

	return (
		<PageTransition transitionKey={location.pathname}>
			<Routes location={location}>
				<Route element={<MainLayOut/>} path={'/main'}/>
				<Route element={<Navigate replace to={'/main'}/>} path={'/'}/>
				<Route element={<Navigate replace to={'/main'}/>} path={'/*'}/>

				<Route element={<SafetyAccidentCases/>} path={'/section0'}/>
				<Route element={<InspectionOfPress/>} path={'/section1'}/>
				<Route element={<LawsOnPress/>} path={'/section2'}/>
				<Route element={<LearnMajorDisaster/>} path={'/section3'}/>
				<Route element={<HeatIllness/>} path={'/section4'}/>

				<Route element={<IssueContent/>} path={'/section5'}/>
				<Route element={<ForeignGroup/>} path={'/section6'}/>
				<Route element={<SafetyPicture/>} path={'/section7'}/>
				<Route element={<SafePlaceExample/>} path={'/section8'}/>
				<Route element={<SafeForkLift/>} path={'/section9'}/>

				<Route element={<ArticleThirtyFive/>} path={'/section10'}/>
				<Route element={<PunishmentQnA/>} path={'/section11'}/>
				<Route element={<Corona19/>} path={'/section12'}/>
				<Route element={<ConfinedSpace/>} path={'/section13'}/>
				<Route element={<ForeignExplosive/>} path={'/section14'}/>

				<Route element={<StuckPicture/>} path={'/section15'}/>
				<Route element={<PreventingElectricShock/>} path={'/section16'}/>
				<Route element={<DisasterFiveThings/>} path={'/section17'}/>
				<Route element={<SafeLadder/>} path={'/section18'}/>
				<Route element={<PressSafetyAccident/>} path={'/section19'}/>

				<Route element={<SafetyCertification/>} path={'/section20'}/>
				<Route element={<PunishmentPromotion/>} path={'/section21'}/>
				<Route element={<WorkSafetyQuiz/>} path={'/section22'}/>
				<Route element={<ForeignFalling/>} path={'/section23'}/>






				{/*<Route element={<SafetyEducation/>} path={'/safe/horizon'}/>*/}
				{/*<Route element={<SafetyEducation vertical/>} path={'/safe/vertical'}/>*/}

				{/*<Route element={<EnforcementOfLaws/>} path={'/law/horizon'}/>*/}
				{/*<Route element={<EnforcementOfLaws vertical/>} path={'/law/vertical'}/>*/}

				{/*<Route element={<MajorDisaster />} path={'/disaster/horizon'}/>*/}
				{/*<Route element={<MajorDisaster vertical />} path={'/disaster/vertical'}/>*/}

				{/*<Route element={<HeatIllness />} path={'/heat/horizon'}/>*/}
				{/*<Route element={<HeatIllness vertical />} path={'/heat/vertical'}/>*/}

				{/*<Route element={<DangerSigns />} path={'/sign/horizon'}/>*/}
				{/*<Route element={<DangerSigns vertical />} path={'/sign/vertical'}/>*/}

				{/*<Route element={<ForeignWorkers />} path={'/worker/horizon'}/>*/}
				{/*<Route element={<ForeignWorkers vertical />} path={'/worker/vertical'}/>*/}

				{/*<Route element={<WorkTools />} path={'/workTool/horizon'}/>*/}
				{/*<Route element={<WorkTools vertical />} path={'/workTool/vertical'}/>*/}

				{/*<Route element={<PicturePoster />} path={'/poster/horizon'}/>*/}
				{/*<Route element={<PicturePoster vertical />} path={'/poster/vertical'}/>*/}
			</Routes>
		</PageTransition>
	);
};

export default Router;
