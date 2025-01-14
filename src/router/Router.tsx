import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import PageTransition from "../component/transition/PageTransition";
import MainLayOut from "../component/layout/MainLayOut";
import SectionLayout from "../component/layout/SectionLayout";
import {SectionData} from "../common/dataSet";

const Router = () => {
	const location = useLocation()

	return (
		<PageTransition transitionKey={location.pathname}>
			<Routes location={location}>
				<Route element={<MainLayOut/>} path={'/main'}/>
				<Route element={<Navigate replace to={'/main'}/>} path={'/'}/>
				<Route element={<Navigate replace to={'/main'}/>} path={'/*'}/>
				{SectionData.map((v,i)=>(
					<Route key={i}
						   element={
						<SectionLayout imageArray={v.images}
						               timerControl={v.timer}
						               video={v.video}
						               moveType={v.imageMoveType?.type}
						               vertical={v.imageMoveType?.vertical}
						/>
					} path={`/section_${i}`}/>
					))
				}
			</Routes>
		</PageTransition>
	);
};

export default Router;
