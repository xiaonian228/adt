import React, {useState} from 'react';
import {Fade, Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

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

const SafetyEducation = () => {
	const imageArray = [
		horizonFront1, horizonBack1, horizonFront2, horizonBack2, horizonFront3, horizonBack3, horizonFront4, horizonBack4,
		horizonFront5, horizonBack5, horizonFront6, horizonBack6, horizonFront7, horizonBack7, horizonFront8, horizonBack8,
	]
	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3, verticalNormal4, verticalNormal5, verticalNormal6, verticalNormal7,
	]

	const [currentIndex, setCurrentIndex] = useState(0);
	// transitionDuration 값을 변경하기 위한 상태
	const [transitionDuration, setTransitionDuration] = useState(2000);

	React.useEffect(() => {
		if (currentIndex % 2 === 0) {
			setTransitionDuration(4000); // 짝수 인덱스일 때 4초
		} else {
			setTransitionDuration(2000); // 홀수 인덱스일 때 2초
		}
	}, [currentIndex]);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div style={{position:'relative'}}>
			<Fade duration={0} transitionDuration={transitionDuration} pauseOnHover={false} easing={'ease-out'}
			      onChange={(i)=> {
				      setCurrentIndex(i);
			      }}
			      autoplay={true} arrows={false}>
				{imageArray.map((img, i) => (
					<div key={i}>
						<div onClick={()=>setMenuOpen(!menuOpen)}
							// onClick={()=>setFullScreen(!fullscreen)}
							   style={{
								   backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
								   backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
							   }}/>
					</div>
				))}
			</Fade>
			<Slide duration={3500} transitionDuration={500} pauseOnHover={false} easing={'ease-out'}
			       onChange={setCurrentIndex} vertical={true}
			       autoplay={true} arrows={false}>
				{verticalImageArray.map((img, i)=>(
					<div key={i}>
						<div onClick={()=>setMenuOpen(!menuOpen)}
							// onClick={()=>setFullScreen(!fullscreen)}
							style={{
								backgroundImage:`url('${img}')`, width:'100%', height:'100vh', cursor:'pointer',
								backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center',
							}}/>
					</div>
				))}
			</Slide>
		</div>
	);
};

export default SafetyEducation;
