import React, {useEffect, useState} from 'react';
import {Fade, Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import {useNavigate} from "react-router-dom";

import horizonFront1 from '../../asset/images/safe/horizon/front1.png'
import horizonFront2 from '../../asset/images/safe/horizon/front2.png'
import horizonFront3 from '../../asset/images/safe/horizon/front3.png'
import horizonFront4 from '../../asset/images/safe/horizon/front4.png'
import horizonFront5 from '../../asset/images/safe/horizon/front5.png'
import horizonFront6 from '../../asset/images/safe/horizon/front6.png'
import horizonFront7 from '../../asset/images/safe/horizon/front7.png'
import horizonFront8 from '../../asset/images/safe/horizon/front8.png'
import horizonBack1 from '../../asset/images/safe/horizon/back1.png'
import horizonBack2 from '../../asset/images/safe/horizon/back2.png'
import horizonBack3 from '../../asset/images/safe/horizon/back3.png'
import horizonBack4 from '../../asset/images/safe/horizon/back4.png'
import horizonBack5 from '../../asset/images/safe/horizon/back5.png'
import horizonBack6 from '../../asset/images/safe/horizon/back6.png'
import horizonBack7 from '../../asset/images/safe/horizon/back7.png'
import horizonBack8 from '../../asset/images/safe/horizon/back8.png'

import verticalNormal1 from '../../asset/images/safe/vertical/normal1.jpg'
import verticalNormal2 from '../../asset/images/safe/vertical/normal2.jpg'
import verticalNormal3 from '../../asset/images/safe/vertical/normal3.jpg'
import verticalNormal4 from '../../asset/images/safe/vertical/normal4.jpg'
import verticalNormal5 from '../../asset/images/safe/vertical/normal5.jpg'
import verticalNormal6 from '../../asset/images/safe/vertical/normal6.jpg'
import verticalNormal7 from '../../asset/images/safe/vertical/normal7.jpg'
import verticalNormal8 from '../../asset/images/safe/vertical/normal8.jpg'

const SafetyEducation = ({vertical}: {vertical?: boolean})  => {
	const imageArray = [
		horizonFront1, horizonBack1, horizonFront2, horizonBack2, horizonFront3, horizonBack3, horizonFront4, horizonBack4,
		horizonFront5, horizonBack5, horizonFront6, horizonBack6, horizonFront7, horizonBack7, horizonFront8, horizonBack8,
	]
	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3, verticalNormal4, verticalNormal5, verticalNormal6, verticalNormal7, verticalNormal8
	]

	const [currentIndex, setCurrentIndex] = useState(0);

	const getDuration = (index: number) => {
		return index % 2 === 0 ? 2000 : 4000; // 짝수 4초, 홀수 2초
	};


	const navigate = useNavigate()

	useEffect(()=>{
		if(vertical){
			if(verticalImageArray.length -3 === currentIndex){
				setTimeout(()=>{
					navigate('/main',{})
				},6000)
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

	const [opacityTiming, setOpacityTiming] = React.useState<number>(-1)
	React.useEffect(()=>{
		setTimeout(()=>{
			setOpacityTiming(0)
			setTimeout(()=>{
				setOpacityTiming(1)
				setTimeout(()=>{
					setOpacityTiming(2)
					setTimeout(()=>{
						setOpacityTiming(verticalImageArray.length)
					},2000)
				},2000)
			},2000)
		},2000)
	},[])

	const handleChange = (previous: number, next: number) => {
		setCurrentIndex(next);
	};
	if(!vertical){
		window.localStorage.setItem('thumbIndex','1')
	}
	else{
		window.localStorage.setItem('thumbIndex','3')
	}

	return (
		<div style={{position:'relative'}}>
			{!vertical?
				<div style={{
					backgroundImage: `url('${imageArray[currentIndex]}')`, width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Fade duration={currentIndex === 0? 2000 : currentIndex === 1? 2000 : getDuration(currentIndex)} transitionDuration={1000} pauseOnHover={false}
						  easing={'ease-out'} infinite={false}
						  onChange={handleChange}
						  autoplay={true} arrows={false} canSwipe={false}>
						{imageArray.map((img, i) => (
							<div key={i}>
								<div style={{
									backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
									backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
								}}/>
							</div>
						))}
					</Fade>
				</div>
				:
				<Slide duration={currentIndex === 0 ? 3000 : 6000} transitionDuration={500} pauseOnHover={false} easing={'ease-out'}
					   onChange={handleChange} infinite={false} slidesToShow={3}
					   autoplay={currentIndex <= 4} arrows={false} canSwipe={false}>
					{verticalImageArray.map((img, i) => (
						<div key={i}>
							<div style={{
								backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
								backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
								transition:'opacity 0.5s',
								opacity: i <= opacityTiming? 1 : 0
							}}/>
						</div>
					))}
				</Slide>
			}
		</div>
	);
};

export default SafetyEducation;
