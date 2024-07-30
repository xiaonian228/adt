import React, {useEffect, useState} from 'react';
import {Fade, Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import horizonFront1 from '../../asset/images/laws/horizon/front1.png'
import horizonNormal1 from '../../asset/images/laws/horizon/normal1.png'
import horizonNormal2 from '../../asset/images/laws/horizon/normal2.png'
import horizonNormal3 from '../../asset/images/laws/horizon/normal3.png'
import horizonNormal4 from '../../asset/images/laws/horizon/normal4.png'

import verticalNormal1 from '../../asset/images/laws/vertical/normal1.jpg'
import verticalNormal2 from '../../asset/images/laws/vertical/normal2.jpg'
import verticalNormal3 from '../../asset/images/laws/vertical/normal3.jpg'
import verticalNormal4 from '../../asset/images/laws/vertical/normal4.jpg'
import {useNavigate} from "react-router-dom";
const EnforcementOfLaws = ({vertical}: {vertical?: boolean})  => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const imageArray = [
		horizonFront1, horizonNormal1, horizonNormal2, horizonNormal3, horizonNormal4
	]
	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3, verticalNormal4
	]

	const navigate = useNavigate()

	useEffect(()=>{
		if(vertical){
			if(verticalImageArray.length -1 === currentIndex){
				setTimeout(()=>{
					navigate('/main',{})
				},5000)
			}
		}
		else{
			if(imageArray.length -1 === currentIndex){
				setTimeout(()=>{
					navigate('/main',{})
				},5000)
			}
		}
	},[currentIndex])

	const handleChange = (previous: number, next: number) => {
		setCurrentIndex(next);
	};

	return (
		<div style={{position: 'relative'}}>
			{!vertical?
				<Fade duration={currentIndex === 0 ? 2000 : 4000} transitionDuration={1000} pauseOnHover={false}
					  onChange={handleChange} canSwipe={false} infinite={false}
					  autoplay={true} arrows={false}>
					{imageArray.map((img, i) => (
						<div key={i}>
							<div style={{
								backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
								backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
							}}/>
						</div>
					))}
				</Fade>
				:
				<Slide duration={4000} transitionDuration={1000} pauseOnHover={false} defaultIndex={0}
					   onChange={handleChange} canSwipe={false} infinite={false} slidesToShow={3}
					   autoplay={currentIndex <= 2} arrows={false}>
					<div style={{width: '100%', height: '100vh', cursor: 'pointer',}}></div>
					<div style={{width: '100%', height: '100vh', cursor: 'pointer',}}></div>
					{verticalImageArray.map((img, i) => (
						<div key={i}>
							<div style={{
								backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
								backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
							}}/>
						</div>
					))}
				</Slide>
			}
		</div>
	);
};

export default EnforcementOfLaws;
