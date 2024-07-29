import React, {useState} from 'react';
import {Zoom} from "react-slideshow-image";
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


const DangerSigns = ({vertical}: {vertical?: boolean})  => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const imageArray = [
		horizonFront1, horizonBack1, horizonFront2, horizonBack2, horizonNormal1, horizonNormal2, horizonNormal3
	]

	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3, verticalNormal4, verticalNormal5,
		verticalNormal6, verticalNormal7, verticalNormal8, verticalNormal9, verticalNormal10,
		verticalNormal11, verticalNormal12, verticalNormal13, verticalNormal14, verticalNormal15,
		verticalNormal16,
	]

	const handleChange = (previous: number, next: number) => {
		setCurrentIndex(next);
	};
	return (
		<div>
			{!vertical?
				<Zoom
					duration={(currentIndex === 0 || currentIndex === 2) ? 2000 : 4000} transitionDuration={1000}
					pauseOnHover={false} scale={1}
					defaultIndex={0} onChange={handleChange}
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
				:
				<Zoom
					duration={currentIndex === 12 ? 6000 : currentIndex > 12 ? 3000 : 1000} transitionDuration={1000}
					pauseOnHover={false} scale={1}
					defaultIndex={0}
					onChange={handleChange}
					autoplay={true} arrows={false}
					canSwipe={false}>
					{verticalImageArray.map((img, i) => (
						<div key={i}>
							<div style={{
								backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
								backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
							}}/>
						</div>
					))}
				</Zoom>
			}
		</div>
	);
};

export default DangerSigns;
