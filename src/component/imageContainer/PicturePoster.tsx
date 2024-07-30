import React, {useEffect, useState} from 'react';
import {Zoom} from "react-slideshow-image";
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




const PicturePoster = ({vertical}: {vertical?: boolean}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const imageArray = [
		horizonNormal1, horizonNormal2, horizonNormal3, horizonNormal4, horizonNormal5,
		horizonNormal6, horizonNormal7, horizonNormal8
	]

	const handleChange = (previous: number, next: number) => {
		setCurrentIndex(next);
	};

	const navigate = useNavigate()

	useEffect(()=>{
		if(imageArray.length -1 === currentIndex){
			setTimeout(()=>{
				navigate('/main',{})
			},5000)
		}
	},[currentIndex])

	return (
		<div>
			<div style={{
				backgroundImage: `url('${imageArray[currentIndex]}')`, width: '100%', height: '100vh', cursor: 'pointer',
				backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
			}}>
				<Zoom
					duration={currentIndex === 7? 6000 : 2000} transitionDuration={1000} pauseOnHover={false} scale={1}
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
		</div>
	);
};

export default PicturePoster;
