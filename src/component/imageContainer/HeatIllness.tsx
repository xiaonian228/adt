import React, {useEffect, useState} from 'react';
import {Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import horizonNormal1 from '../../asset/images/heat/horizon/normal1.jpg'
import horizonNormal2 from '../../asset/images/heat/horizon/normal2.jpg'
import horizonNormal3 from '../../asset/images/heat/horizon/normal3.jpg'
import horizonNormal4 from '../../asset/images/heat/horizon/normal4.jpg'
import horizonNormal5 from '../../asset/images/heat/horizon/normal5.jpg'
import horizonNormal6 from '../../asset/images/heat/horizon/normal6.jpg'
import horizonNormal7 from '../../asset/images/heat/horizon/normal7.jpg'
import horizonNormal8 from '../../asset/images/heat/horizon/normal8.jpg'
import horizonNormal9 from '../../asset/images/heat/horizon/normal9.jpg'
import horizonNormal10 from '../../asset/images/heat/horizon/normal10.jpg'
import horizonNormal11 from '../../asset/images/heat/horizon/normal11.jpg'
import horizonNormal12 from '../../asset/images/heat/horizon/normal12.jpg'
import horizonNormal13 from '../../asset/images/heat/horizon/normal13.jpg'
import horizonNormal14 from '../../asset/images/heat/horizon/normal14.jpg'

import verticalNormal1 from '../../asset/images/heat/vertical/normal1.png'
import verticalNormal2 from '../../asset/images/heat/vertical/normal2.png'
import verticalNormal3 from '../../asset/images/heat/vertical/normal3.png'
import {useNavigate} from "react-router-dom";

const HeatIllness = ({vertical}: {vertical?: boolean})  => {

	const imageArray = [
		horizonNormal1, horizonNormal2, horizonNormal3, horizonNormal4, horizonNormal5,
		horizonNormal6, horizonNormal7, horizonNormal8, horizonNormal9, horizonNormal10,
		horizonNormal11, horizonNormal12, horizonNormal13, horizonNormal14,
	]
	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3,
	]

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleChange = (previous: number, next: number) => {
		setCurrentIndex(next);
	};

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


	return (
		<div style={{position: 'relative'}}>
			{!vertical?
				<div style={{
					backgroundImage: `url('${imageArray[currentIndex]}')`,
					width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Zoom
						duration={3000} transitionDuration={1000} pauseOnHover={false} scale={1}
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
					</Zoom>
				</div>
				:
				<div style={{
					backgroundImage: `url('${verticalImageArray[currentIndex]}')`,
					width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Zoom
						duration={3000} transitionDuration={1000} pauseOnHover={false} scale={1}
						defaultIndex={0} onChange={handleChange} infinite={false}
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

export default HeatIllness;
