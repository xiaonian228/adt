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
import ForkliftCollision from "../component/sectionContainer/ForkliftCollision";
import PunishmentQnA from "../component/sectionContainer/PunishmentQnA";
import BeforeStretching from "../component/sectionContainer/BeforeStretching";
import SafetySign from "../component/sectionContainer/SafetySign";
import LessThan50 from "../component/sectionContainer/LessThan50";
import NoAllowed from "../component/sectionContainer/NoAllowed";
import NoiseWork from "../component/sectionContainer/NoiseWork";
import ForkliftPicture from "../component/sectionContainer/ForkliftPicture";
import RiskAssessment from "../component/sectionContainer/RiskAssessment";
import PunishmentAnswer from "../component/sectionContainer/PunishmentAnswer";
import ActionGuideLines from "../component/sectionContainer/ActionGuideLines";
import IndustrialAccident from "../component/sectionContainer/IndustrialAccident";
import WorkPlacePicture from "../component/sectionContainer/WorkPlacePicture";
import ConveyorBelt from "../component/sectionContainer/ConveyorBelt";
import Nofire from "../component/sectionContainer/Nofire";
import DisasterForklift from "../component/sectionContainer/DisasterForklift";
import SafetyQuiz from "../component/sectionContainer/SafetyQuiz";
import FinancialAssistance from "../component/sectionContainer/FinancialAssistance";
import RotationalRolling from "../component/sectionContainer/RotationalRolling";
import CarCrash from "../component/sectionContainer/CarCrash";
import StructureGuidelines from "../component/sectionContainer/StructureGuidelines";
import BeforeCheck from "../component/sectionContainer/BeforeCheck";
import EntrapmentAccident from "../component/sectionContainer/EntrapmentAccident";
import WorkplaceMovement from "../component/sectionContainer/WorkplaceMovement";
import CollapsingCargo from "../component/sectionContainer/CollapsingCargo";
import ThreePrinciples from "../component/sectionContainer/ThreePrinciples";
import ChemicalLeak from "../component/sectionContainer/ChemicalLeak";
import SafeWorkplace from "../component/sectionContainer/SafeWorkplace";
import FireSafety from "../component/sectionContainer/FireSafety";
import CoverageAccident from "../component/sectionContainer/CoverageAccident";
import PunishmentQuiz from "../component/sectionContainer/PunishmentQuiz";
import FatalAccidents from "../component/sectionContainer/FatalAccidents";
import LOTO from "../component/sectionContainer/LOTO";
import ProtectiveMeasures from "../component/sectionContainer/ProtectiveMeasures";
import FireHazard from "../component/sectionContainer/FireHazard";
import SafeWorkplace2 from "../component/sectionContainer/SafeWorkplace2";

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





				<Route element={<PunishmentQnA/>} path={'/section0'}/>
				<Route element={<BeforeStretching/>} path={'/section1'}/>
				<Route element={<SafetySign/>} path={'/section2'}/>
				<Route element={<LessThan50/>} path={'/section3'}/>
				<Route element={<ForkliftCollision/>} path={'/section4'}/>
				<Route element={<NoAllowed/>} path={'/section5'}/>
				<Route element={<NoiseWork/>} path={'/section6'}/>
				<Route element={<ForkliftPicture/>} path={'/section7'}/>
				<Route element={<RiskAssessment/>} path={'/section8'}/>
				<Route element={<PunishmentAnswer/>} path={'/section9'}/>

				<Route element={<ActionGuideLines/>} path={'/section10'}/>
				<Route element={<IndustrialAccident/>} path={'/section11'}/>
				<Route element={<WorkPlacePicture/>} path={'/section12'}/>
				<Route element={<ConveyorBelt/>} path={'/section13'}/>
				<Route element={<Nofire/>} path={'/section14'}/>
				<Route element={<DisasterForklift/>} path={'/section15'}/>
				<Route element={<SafetyQuiz/>} path={'/section16'}/>
				<Route element={<FinancialAssistance/>} path={'/section17'}/>
				<Route element={<RotationalRolling/>} path={'/section18'}/>
				<Route element={<CarCrash/>} path={'/section19'}/>

				<Route element={<StructureGuidelines/>} path={'/section20'}/>
				<Route element={<BeforeCheck/>} path={'/section21'}/>
				<Route element={<EntrapmentAccident/>} path={'/section22'}/>
				<Route element={<WorkplaceMovement/>} path={'/section23'}/>
				<Route element={<CollapsingCargo/>} path={'/section24'}/>
				<Route element={<ThreePrinciples/>} path={'/section25'}/>
				<Route element={<ChemicalLeak/>} path={'/section26'}/>
				<Route element={<SafeWorkplace/>} path={'/section27'}/>
				<Route element={<FireSafety/>} path={'/section28'}/>
				<Route element={<CoverageAccident/>} path={'/section29'}/>

				<Route element={<PunishmentQuiz/>} path={'/section30'}/>
				<Route element={<FatalAccidents/>} path={'/section31'}/>
				<Route element={<LOTO/>} path={'/section32'}/>
				<Route element={<ProtectiveMeasures/>} path={'/section33'}/>
				<Route element={<FireHazard/>} path={'/section34'}/>
				<Route element={<SafeWorkplace2/>} path={'/section35'}/>

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
