import React from 'react';
import {Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import horizonNormal1 from '../../asset/images/worktools/horizon/normal1.jpg'
import horizonNormal2 from '../../asset/images/worktools/horizon/normal2.jpg'
import horizonNormal3 from '../../asset/images/worktools/horizon/normal3.jpg'
import horizonNormal4 from '../../asset/images/worktools/horizon/normal4.jpg'
import horizonNormal5 from '../../asset/images/worktools/horizon/normal5.jpg'
import horizonNormal6 from '../../asset/images/worktools/horizon/normal6.jpg'
import horizonNormal7 from '../../asset/images/worktools/horizon/normal7.jpg'
import horizonNormal8 from '../../asset/images/worktools/horizon/normal8.jpg'
import horizonNormal9 from '../../asset/images/worktools/horizon/normal9.jpg'
import horizonNormal10 from '../../asset/images/worktools/horizon/normal10.jpg'
import horizonNormal11 from '../../asset/images/worktools/horizon/normal11.jpg'
import horizonNormal12 from '../../asset/images/worktools/horizon/normal12.jpg'
import horizonNormal13 from '../../asset/images/worktools/horizon/normal13.jpg'
import horizonNormal14 from '../../asset/images/worktools/horizon/normal14.jpg'
import horizonNormal15 from '../../asset/images/worktools/horizon/normal15.jpg'
import horizonNormal16 from '../../asset/images/worktools/horizon/normal16.jpg'
import horizonNormal17 from '../../asset/images/worktools/horizon/normal17.jpg'
import horizonNormal18 from '../../asset/images/worktools/horizon/normal18.jpg'

import verticalNormal1 from '../../asset/images/worktools/vertical/normal1.png'
import verticalNormal2 from '../../asset/images/worktools/vertical/normal2.png'
import verticalNormal3 from '../../asset/images/worktools/vertical/normal3.png'
import verticalNormal4 from '../../asset/images/worktools/vertical/normal4.png'
import verticalNormal5 from '../../asset/images/worktools/vertical/normal5.png'
import verticalNormal6 from '../../asset/images/worktools/vertical/normal6.png'
import verticalNormal7 from '../../asset/images/worktools/vertical/normal7.png'
import verticalNormal8 from '../../asset/images/worktools/vertical/normal8.png'
import verticalNormal9 from '../../asset/images/worktools/vertical/normal9.png'
import verticalNormal10 from '../../asset/images/worktools/vertical/normal10.png'
import verticalNormal11 from '../../asset/images/worktools/vertical/normal11.png'
import verticalNormal12 from '../../asset/images/worktools/vertical/normal12.png'
import verticalNormal13 from '../../asset/images/worktools/vertical/normal13.png'
import verticalNormal14 from '../../asset/images/worktools/vertical/normal14.png'
import verticalNormal15 from '../../asset/images/worktools/vertical/normal15.png'
import verticalNormal16 from '../../asset/images/worktools/vertical/normal16.png'
import verticalNormal17 from '../../asset/images/worktools/vertical/normal17.png'
import verticalNormal18 from '../../asset/images/worktools/vertical/normal18.png'
import verticalNormal19 from '../../asset/images/worktools/vertical/normal19.png'
import verticalNormal20 from '../../asset/images/worktools/vertical/normal20.png'

const WorkTools = ({vertical}: {vertical?: boolean})  => {

	const imageArray = [
		horizonNormal1, horizonNormal2, horizonNormal3, horizonNormal4, horizonNormal5,
		horizonNormal6, horizonNormal7, horizonNormal8, horizonNormal9, horizonNormal10,
		horizonNormal11, horizonNormal12, horizonNormal13, horizonNormal14, horizonNormal15,
		horizonNormal16, horizonNormal17, horizonNormal18,
	]
	const verticalImageArray = [
		verticalNormal1, verticalNormal2, verticalNormal3, verticalNormal4, verticalNormal5,
		verticalNormal6, verticalNormal7, verticalNormal8, verticalNormal9, verticalNormal10,
		verticalNormal11, verticalNormal12, verticalNormal13, verticalNormal14, verticalNormal15,
		verticalNormal16, verticalNormal17, verticalNormal18, verticalNormal19, verticalNormal20
	]

	return (
		<div>
			{!vertical?
				<Zoom
					duration={2500} pauseOnHover={false} transitionDuration={0} scale={1}
					defaultIndex={0}
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
					duration={4000} pauseOnHover={false} scale={1}
					defaultIndex={0}
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
			}
		</div>
	);
};

export default WorkTools;
