import React, {useEffect, useState} from 'react';
import {Fade, Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import horizonNormal1 from '../../asset/images/workers/horizon/normal1.jpg'
import horizonNormal2 from '../../asset/images/workers/horizon/normal2.jpg'
import horizonNormal3 from '../../asset/images/workers/horizon/normal3.jpg'
import horizonNormal4 from '../../asset/images/workers/horizon/normal4.jpg'
import horizonNormal5 from '../../asset/images/workers/horizon/normal5.jpg'
import horizonNormal6 from '../../asset/images/workers/horizon/normal6.jpg'
import horizonNormal7 from '../../asset/images/workers/horizon/normal7.jpg'
import horizonNormal8 from '../../asset/images/workers/horizon/normal8.jpg'
import horizonNormal9 from '../../asset/images/workers/horizon/normal9.jpg'
import horizonNormal10 from '../../asset/images/workers/horizon/normal10.jpg'
import horizonNormal11 from '../../asset/images/workers/horizon/normal11.jpg'
import horizonNormal12 from '../../asset/images/workers/horizon/normal12.jpg'
import horizonNormal13 from '../../asset/images/workers/horizon/normal13.jpg'
import horizonNormal14 from '../../asset/images/workers/horizon/normal14.jpg'
import horizonNormal15 from '../../asset/images/workers/horizon/normal15.jpg'
import horizonNormal16 from '../../asset/images/workers/horizon/normal16.jpg'
import horizonNormal17 from '../../asset/images/workers/horizon/normal17.jpg'
import horizonNormal18 from '../../asset/images/workers/horizon/normal18.jpg'
import horizonNormal19 from '../../asset/images/workers/horizon/normal19.jpg'
import horizonNormal20 from '../../asset/images/workers/horizon/normal20.jpg'
import horizonNormal21 from '../../asset/images/workers/horizon/normal21.jpg'
import horizonNormal22 from '../../asset/images/workers/horizon/normal22.jpg'
import horizonNormal23 from '../../asset/images/workers/horizon/normal23.jpg'
import horizonNormal24 from '../../asset/images/workers/horizon/normal24.jpg'
import horizonNormal25 from '../../asset/images/workers/horizon/normal25.jpg'
import horizonNormal26 from '../../asset/images/workers/horizon/normal26.jpg'
import horizonNormal27 from '../../asset/images/workers/horizon/normal27.jpg'
import horizonNormal28 from '../../asset/images/workers/horizon/normal28.jpg'
import horizonNormal29 from '../../asset/images/workers/horizon/normal29.jpg'
import horizonNormal30 from '../../asset/images/workers/horizon/normal30.jpg'

import verticalNormal1 from '../../asset/images/workers/vertical/normal1.png'
import verticalNormal2 from '../../asset/images/workers/vertical/normal2.png'
import verticalNormal3 from '../../asset/images/workers/vertical/normal3.png'
import verticalNormal4 from '../../asset/images/workers/vertical/normal4.png'
import verticalNormal5 from '../../asset/images/workers/vertical/normal5.png'
import verticalNormal6 from '../../asset/images/workers/vertical/normal6.png'
import verticalNormal7 from '../../asset/images/workers/vertical/normal7.png'
import verticalNormal8 from '../../asset/images/workers/vertical/normal8.png'
import verticalNormal9 from '../../asset/images/workers/vertical/normal9.png'
import verticalNormal10 from '../../asset/images/workers/vertical/normal10.png'
import verticalNormal11 from '../../asset/images/workers/vertical/normal11.png'
import verticalNormal12 from '../../asset/images/workers/vertical/normal12.png'
import verticalNormal13 from '../../asset/images/workers/vertical/normal13.png'
import verticalNormal14 from '../../asset/images/workers/vertical/normal14.png'
import verticalNormal15 from '../../asset/images/workers/vertical/normal15.png'
import verticalNormal16 from '../../asset/images/workers/vertical/normal16.png'
import verticalNormal17 from '../../asset/images/workers/vertical/normal17.png'
import verticalNormal18 from '../../asset/images/workers/vertical/normal18.png'
import verticalNormal19 from '../../asset/images/workers/vertical/normal19.png'
import verticalNormal20 from '../../asset/images/workers/vertical/normal20.png'
import verticalNormal21 from '../../asset/images/workers/vertical/normal21.png'
import verticalNormal22 from '../../asset/images/workers/vertical/normal22.png'
import verticalNormal23 from '../../asset/images/workers/vertical/normal23.png'
import verticalNormal24 from '../../asset/images/workers/vertical/normal24.png'
import verticalNormal25 from '../../asset/images/workers/vertical/normal25.png'
import verticalNormal26 from '../../asset/images/workers/vertical/normal26.png'
import verticalNormal27 from '../../asset/images/workers/vertical/normal27.png'
import verticalNormal28 from '../../asset/images/workers/vertical/normal28.png'
import verticalNormal29 from '../../asset/images/workers/vertical/normal29.png'
import verticalNormal30 from '../../asset/images/workers/vertical/normal30.png'
import {useNavigate} from "react-router-dom";


const ForeignWorkers = ({vertical}: {vertical?: boolean})  => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleChange = (previous: number, next: number) => {
		setCurrentIndex(next);
	}
	const imageArray = [
		horizonNormal1, horizonNormal2, horizonNormal3, horizonNormal4, horizonNormal5,
		horizonNormal6, horizonNormal7, horizonNormal8, horizonNormal9, horizonNormal10,
		horizonNormal11, horizonNormal12, horizonNormal13, horizonNormal14, horizonNormal15,
		horizonNormal16, horizonNormal17, horizonNormal18, horizonNormal19, horizonNormal20,
		horizonNormal21, horizonNormal22, horizonNormal23, horizonNormal24, horizonNormal25,
		horizonNormal26, horizonNormal27, horizonNormal28, horizonNormal29, horizonNormal30,
	]
	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3, verticalNormal4, verticalNormal5,
		verticalNormal6, verticalNormal7, verticalNormal8, verticalNormal9, verticalNormal10,
		verticalNormal11, verticalNormal12, verticalNormal13, verticalNormal14, verticalNormal15,
		verticalNormal16, verticalNormal17, verticalNormal18, verticalNormal19, verticalNormal20,
		verticalNormal21, verticalNormal22, verticalNormal23, verticalNormal24, verticalNormal25,
		verticalNormal26, verticalNormal27, verticalNormal28, verticalNormal29, verticalNormal30,
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

	if(!vertical){
		window.localStorage.setItem('thumbIndex','1')
	}
	else{
		window.localStorage.setItem('thumbIndex','3')
	}

	return (
		<div>
			{!vertical?
				<div style={{
					backgroundImage: `url('${imageArray[currentIndex]}')`,
					width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Fade
						duration={1500} transitionDuration={500} pauseOnHover={false}
						defaultIndex={0} onChange={handleChange} infinite={false}
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
				<div style={{
					backgroundImage: `url('${verticalImageArray[currentIndex]}')`,
					width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Zoom
						duration={1000} transitionDuration={1000} pauseOnHover={false} scale={1}
						defaultIndex={0} infinite={false} onChange={handleChange}
						autoplay={true} arrows={false} canSwipe={false}>
						{verticalImageArray.map((img, i) => (
							<div key={i}>
								<div style={{
									backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
									backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
								}}/>
							</div>
						))}
					</Zoom>
				</div>
			}
		</div>
	);
};

export default ForeignWorkers;
