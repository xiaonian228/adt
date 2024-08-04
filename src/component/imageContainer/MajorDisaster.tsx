import React, {useEffect, useState} from 'react';
import {Fade} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import horizonNormal1 from '../../asset/images/disaster/horizon/normal1.jpg'
import horizonNormal2 from '../../asset/images/disaster/horizon/normal2.jpg'
import horizonNormal3 from '../../asset/images/disaster/horizon/normal3.jpg'
import horizonNormal4 from '../../asset/images/disaster/horizon/normal4.jpg'
import horizonNormal5 from '../../asset/images/disaster/horizon/normal5.jpg'
import horizonNormal6 from '../../asset/images/disaster/horizon/normal6.jpg'
import horizonNormal7 from '../../asset/images/disaster/horizon/normal7.jpg'

import verticalFront1 from '../../asset/images/disaster/vertical/front1.png'
import verticalBack1 from '../../asset/images/disaster/vertical/back1.png'
import verticalBack2 from '../../asset/images/disaster/vertical/back2.png'
import verticalFront3 from '../../asset/images/disaster/vertical/front3.png'
import verticalBack3 from '../../asset/images/disaster/vertical/back3.png'
import verticalFront4 from '../../asset/images/disaster/vertical/front4.png'
import verticalBack4 from '../../asset/images/disaster/vertical/back4.png'
import {useNavigate} from "react-router-dom";

const MajorDisaster = ({vertical}: {vertical?: boolean}) => {
	const imageArray = [
		horizonNormal1, horizonNormal2, horizonNormal3, horizonNormal4, horizonNormal5, horizonNormal6, horizonNormal7
	]

	const verticalImageArray = [
		verticalFront1, verticalBack1, verticalBack2, verticalFront3, verticalBack3, verticalFront4, verticalBack4
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
				},12000)
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
		<div style={{position: 'relative'}}>
			{!vertical ?
				<div style={{
					backgroundImage: `url('${imageArray[currentIndex]}')`, width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Fade duration={(currentIndex === 4 || currentIndex === 5) ? 12000 : 5000} transitionDuration={500} pauseOnHover={false}
					      onChange={handleChange} infinite={false}
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
					backgroundImage: `url('${verticalImageArray[currentIndex]}')`, width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Fade duration={(currentIndex === 0 || currentIndex === 3 || currentIndex === 5 || currentIndex === 7)? 2000 : 12000} transitionDuration={500} pauseOnHover={false}
						  onStartChange={handleChange} defaultIndex={0} infinite={false}
						  autoplay={true} arrows={false} canSwipe={false}>
						{verticalImageArray.map((img, i)=>(
							<div key={i}>
								<div style={{
									backgroundImage:`url('${img}')`, width:'100%', height:'100vh', cursor:'pointer',
									backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center',
								}}/>
							</div>
						))}
					</Fade>
				</div>
			}
		</div>
	);
};

export default MajorDisaster;
