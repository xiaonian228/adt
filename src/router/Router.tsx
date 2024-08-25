import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import APILayout from "../component/layout/APILayout";
import SafetyEducation from "../component/imageContainer/SafetyEducation";
import PageTransition from "../component/transition/PageTransition";
import EnforcementOfLaws from "../component/imageContainer/EnforcementOfLaws";
import MajorDisaster from "../component/imageContainer/MajorDisaster";
import PicturePoster from "../component/imageContainer/PicturePoster";
import HeatIllness from "../component/imageContainer/HeatIllness";
import DangerSigns from "../component/imageContainer/DangerSigns";
import ForeignWorkers from "../component/imageContainer/ForeignWorkers";
import WorkTools from "../component/imageContainer/WorkTools";
import MainLayOut from "../component/layout/MainLayOut";

const Router = () => {
	const location = useLocation()

		if(location.pathname === '/heat/vertical'){
			localStorage.setItem('totalThumb','1')
		}
		else if(location.pathname === '/sign/vertical'){
			localStorage.setItem('totalThumb','2')
		}
		else if(location.pathname === '/poster/vertical'){
			localStorage.setItem('totalThumb','3')
		}
		else if(location.pathname === '/law/vertical'){
			localStorage.setItem('totalThumb','0')
		}


	return (
		<PageTransition transitionKey={location.pathname}>
			<Routes location={location}>
				<Route element={<MainLayOut/>} path={'/main'}/>
				<Route element={<Navigate replace to={'/main'}/>} path={'/'}/>
				<Route element={<Navigate replace to={'/main'}/>} path={'/*'}/>

				<Route element={<SafetyEducation/>} path={'/safe/horizon'}/>
				<Route element={<SafetyEducation vertical/>} path={'/safe/vertical'}/>

				<Route element={<EnforcementOfLaws/>} path={'/law/horizon'}/>
				<Route element={<EnforcementOfLaws vertical/>} path={'/law/vertical'}/>

				<Route element={<MajorDisaster />} path={'/disaster/horizon'}/>
				<Route element={<MajorDisaster vertical />} path={'/disaster/vertical'}/>

				<Route element={<HeatIllness />} path={'/heat/horizon'}/>
				<Route element={<HeatIllness vertical />} path={'/heat/vertical'}/>

				<Route element={<DangerSigns />} path={'/sign/horizon'}/>
				<Route element={<DangerSigns vertical />} path={'/sign/vertical'}/>

				<Route element={<ForeignWorkers />} path={'/worker/horizon'}/>
				<Route element={<ForeignWorkers vertical />} path={'/worker/vertical'}/>

				<Route element={<WorkTools />} path={'/workTool/horizon'}/>
				<Route element={<WorkTools vertical />} path={'/workTool/vertical'}/>

				<Route element={<PicturePoster />} path={'/poster/horizon'}/>
				<Route element={<PicturePoster vertical />} path={'/poster/vertical'}/>
			</Routes>
		</PageTransition>
	);
};

export default Router;
