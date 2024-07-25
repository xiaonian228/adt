import React from 'react';
import july01 from '../../asset/images/july01.jpg'
import july02 from '../../asset/images/july02.jpg'
import july03 from '../../asset/images/july03.jpg'
import july04 from '../../asset/images/july04.jpg'
import july05 from '../../asset/images/july05.jpg'
import july06 from '../../asset/images/july06.jpg'
import july07 from '../../asset/images/july07.jpg'
import july08 from '../../asset/images/july08.jpg'

import safe01 from '../../asset/images/safe01.jpg'
import safe02 from '../../asset/images/safe02.jpg'
import safe03 from '../../asset/images/safe03.jpg'
import safe04 from '../../asset/images/safe04.jpg'
import safe05 from '../../asset/images/safe05.jpg'
import safe06 from '../../asset/images/safe06.jpg'
import safe07 from '../../asset/images/safe07.jpg'
import safe08 from '../../asset/images/safe08.jpg'
//@ts-ignore
import sampleVideo from '../../asset/video/sample_30sec.mp4'
import {Fade, Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import ReactPlayer from "react-player";

const ImagesContainer = () => {

	const jungImage = [
		july01, july02, july03, july04, july05, july06, july07, july08,
		safe01, safe02, safe03, safe04, safe05, safe06, safe07, safe08,
	]

	const [fullscreen, setFullScreen] = React.useState(false)


	// const [indexCount, setIndexCount] = React.useState<number>(0)
	// React.useEffect(()=>{
	// 	const interval = setInterval(()=>{
	// 		if(jungImage.length === indexCount+1){
	// 			setIndexCount(0)
	// 		}
	// 		else{
	// 			setIndexCount((prev)=>(prev+1))
	// 		}
	// 	},3000)
	// 	return ()=> clearInterval(interval)
	// },[indexCount])

	React.useEffect(()=>{
		if(fullscreen){
			document.documentElement.requestFullscreen()
		}
		else{
			if(document.fullscreenElement){
				document.exitFullscreen()
			}
		}

	},[fullscreen])


	return (
		<div

			style={{
				// transition: 'all 0.3s',
				// backgroundImage:`url('${jungImage[indexCount]}')`,
				// backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center',
				// width:'100vw',
				// height:'100vh',
				// cursor:'pointer'
		}}
		>
			<ReactPlayer url={sampleVideo} playing={true} loop={true} muted={true} width={'100vw'} height={'100vh'} />
			{/*<Fade duration={3000} transitionDuration={500} pauseOnHover={false}*/}
			{/*      autoplay={true} infinite={true} arrows={false}>*/}
			{/*	{jungImage.map((img, i)=>(*/}
			{/*		<div key={i}>*/}
			{/*			<div onClick={()=>setFullScreen(!fullscreen)}*/}
			{/*				style={{*/}
			{/*				backgroundImage:`url('${img}')`, width:'100%', height:'100vh', cursor:'pointer',*/}
			{/*				backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center',*/}
			{/*			}}/>*/}
			{/*		</div>*/}
			{/*	))}*/}
			{/*</Fade>*/}
			{/*<img src={jungImage[indexCount]}*/}
			{/*     style={{width:'100vw', height:'100vh', transition:'all 0.3s', objectPosition:'center', objectFit:'contain'}} alt=""/>*/}
		</div>
	);
};

export default ImagesContainer;
