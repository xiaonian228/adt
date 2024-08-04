import React, {useEffect, useState} from 'react';
import {Fade} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import horizonFront1 from '../../asset/images/signs/horizon/front1.png'
import horizonBack1 from '../../asset/images/signs/horizon/back1.png'
import horizonFront2 from '../../asset/images/signs/horizon/front2.png'
import horizonBack2 from '../../asset/images/signs/horizon/back2.png'
import horizonNormal1 from '../../asset/images/signs/horizon/normal1.png'
import horizonNormal2 from '../../asset/images/signs/horizon/normal2.png'
import horizonNormal3 from '../../asset/images/signs/horizon/normal3.png'

import verticalNormal1 from '../../asset/images/signs/vertical/normal1.jpg'
import verticalNormal2 from '../../asset/images/signs/vertical/normal2.jpg'
import verticalNormal3 from '../../asset/images/signs/vertical/normal3.jpg'
import verticalNormal4 from '../../asset/images/signs/vertical/normal4.jpg'
import verticalNormal5 from '../../asset/images/signs/vertical/normal5.jpg'
import verticalNormal6 from '../../asset/images/signs/vertical/normal6.jpg'
import verticalNormal7 from '../../asset/images/signs/vertical/normal7.jpg'
import verticalNormal8 from '../../asset/images/signs/vertical/normal8.jpg'
import verticalNormal9 from '../../asset/images/signs/vertical/normal9.jpg'
import verticalNormal10 from '../../asset/images/signs/vertical/normal10.jpg'
import verticalNormal11 from '../../asset/images/signs/vertical/normal11.jpg'
import verticalNormal12 from '../../asset/images/signs/vertical/normal12.jpg'
import verticalNormal13 from '../../asset/images/signs/vertical/normal13.jpg'
import verticalNormal14 from '../../asset/images/signs/vertical/normal14.jpg'
import verticalNormal15 from '../../asset/images/signs/vertical/normal15.jpg'
import verticalNormal16 from '../../asset/images/signs/vertical/normal16.jpg'
import {useNavigate} from "react-router-dom";


const DangerSigns = ({vertical}: {vertical?: boolean})  => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const imageArray = [
		horizonFront1, horizonBack1, horizonFront2, horizonBack2, horizonNormal1, horizonNormal2, horizonNormal3
	]

	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3, verticalNormal4, verticalNormal5,
		verticalNormal6, verticalNormal7, verticalNormal8, verticalNormal9, verticalNormal10,
		verticalNormal11, verticalNormal12, verticalNormal13, verticalNormal13,
	]

	const subVerticalImageArray = [
		verticalNormal14, verticalNormal15,
		verticalNormal16,
	]

	const handleChange = (previous: number, next: number) => {
		setCurrentIndex(next);
	};

	useEffect(()=>{
		if(currentIndex >= 13){
			setChangePage(true)
			// setTimeout(()=>{
			// 	setChangePage(false)
			// 	setCurrentIndex(0)
			// },15000)
		}

	},[currentIndex])

	if(!vertical){
		window.localStorage.setItem('thumbIndex','2')
	}
	else{
		window.localStorage.setItem('thumbIndex','0')
	}

	const [changePage, setChangePage] = useState(false)
	const [timingPoster, setTimingPoster] = useState({center: false, left: false, right: false})

	useEffect(()=>{
		if(changePage){
			setTimeout(()=>{
				setTimingPoster((prev)=>({...prev, left: true}))
				setTimeout(()=>{
					setTimingPoster((prev)=>({...prev, center: true}))
					setTimeout(()=>{
						setTimingPoster((prev)=>({...prev, right: true}))
						setTimeout(()=>{
							setTimingPoster({center: false, left: false, right: false})
							navigate('/main',{})
						},6000)
					},3000)
				},3000)
			},1000)
		}
		else{
			setTimingPoster({center: false, left: false, right: false})
		}

	},[changePage])

	const navigate = useNavigate()

	useEffect(()=>{
		if(!vertical){
			if(imageArray.length -1 === currentIndex){
				setTimeout(()=>{
					navigate('/main',{})
				},5000)
			}
		}
	},[currentIndex])

	return (
		<div>
			{!vertical?
				<div style={{
					backgroundImage: `url('${imageArray[currentIndex]}')`, width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					<Fade
						duration={(currentIndex === 0 || currentIndex === 2) ? 2000 : 4000} transitionDuration={2000}
						pauseOnHover={false}
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
					backgroundImage: currentIndex >= 13? 'none' : `url('${verticalImageArray[currentIndex]}')`, width: '100%', height: '100vh', cursor: 'pointer',
					backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
				}}>
					{
						changePage?
							<div style={{width: '100%', height: '100vh', cursor: 'pointer', transition: 'all 0.5s', opacity: changePage? 1 : 0,
								backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display:'flex', justifyContent:'center'}}>
								<div style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', height:'100vh', width:'100%',
									backgroundImage:`url('${subVerticalImageArray[0]}')`,opacity: timingPoster.left? 1 : 0, transition:'opacity 0.5s'}}></div>
								<div style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height:'100vh', width:'100%',
									backgroundImage:`url('${subVerticalImageArray[1]}')`,opacity: timingPoster.center? 1 : 0, transition:'opacity 0.5s'}}></div>
								<div style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left', height:'100vh', width:'100%',
									backgroundImage:`url('${subVerticalImageArray[2]}')`,opacity: timingPoster.right? 1 : 0, transition:'opacity 0.5s'}}></div>
							</div>
							:
						<Fade
							duration={currentIndex === 12 ? 6000 : currentIndex > 12 ? 3000 : 500} transitionDuration={1000}
							pauseOnHover={false}
							onChange={handleChange}
							autoplay={true} arrows={false} infinite={false}
							canSwipe={false}>
							{verticalImageArray.map((img, i) => (
								<div key={i}>
									<div style={{
										backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
										backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
									}}/>
								</div>
							))}
						</Fade>
					}
				</div>
			}
		</div>
	);
};

export default DangerSigns;
