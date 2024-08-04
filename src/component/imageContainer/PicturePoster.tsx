import React, {useEffect, useState} from 'react';
import {Slide, Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import horizonNormal1 from '../../asset/images/poster/horizon/normal1.jpg'
import horizonNormal2 from '../../asset/images/poster/horizon/normal2.jpg'
import horizonNormal3 from '../../asset/images/poster/horizon/normal3.jpg'
import horizonNormal4 from '../../asset/images/poster/horizon/normal4.jpg'
import horizonNormal5 from '../../asset/images/poster/horizon/normal5.jpg'
import horizonNormal6 from '../../asset/images/poster/horizon/normal6.jpg'
import horizonNormal7 from '../../asset/images/poster/horizon/normal7.jpg'
import horizonNormal8 from '../../asset/images/poster/horizon/normal8.jpg'
import {useNavigate} from "react-router-dom";
import verticalNormal1 from "../../asset/images/poster/vertical/normal1.png";
import verticalNormal2 from "../../asset/images/poster/vertical/normal2.png";
import verticalNormal3 from "../../asset/images/poster/vertical/normal3.png";
import verticalNormal4 from "../../asset/images/poster/vertical/normal4.png";

const PicturePoster = ({vertical}: {vertical?: boolean}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const imageArray = [
		horizonNormal1, horizonNormal2, horizonNormal3, horizonNormal4, horizonNormal5,
		horizonNormal6, horizonNormal7, horizonNormal8
	]

	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3, verticalNormal4
	]

	const handleChange = (previous: number, next: number) => {
		setCurrentIndex(next);
	};

	const navigate = useNavigate()

	useEffect(()=>{
		if(vertical){
			if(verticalImageArray.length -3 === currentIndex){
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
		window.localStorage.setItem('thumbIndex','2')
	}
	else{
		window.localStorage.setItem('thumbIndex','0')
	}

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
					},1000)
				},1000)
			},1000)
		},1000)
	},[])
	// 세로형은 3개 보여주고 슬라이드 형태
	// 세로형 - 1, 2, 3 은
	// ex => 1 -3초 2 - 3초 3- 3초 보여준 뒤 슬라이드 진행.
	return (
		<div>
			{!vertical ?
				<div style={{
					backgroundImage: `url('${imageArray[currentIndex]}')`, width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Zoom
						duration={currentIndex === 7 ? 6000 : 2000} transitionDuration={1000} pauseOnHover={false} scale={1}
						defaultIndex={0} onChange={handleChange}
						autoplay={true} arrows={false} canSwipe={false} infinite={false}>
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
				<Slide duration={3000} transitionDuration={500} pauseOnHover={false} easing={'ease-out'}
					   onChange={handleChange} infinite={false} slidesToShow={3}
					   autoplay={currentIndex <= 0} arrows={false} canSwipe={false}>
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

export default PicturePoster;
