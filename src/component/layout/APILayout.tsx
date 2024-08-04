import React, {CSSProperties, useEffect} from 'react';

import 'react-slideshow-image/dist/styles.css'
import {
	getTwoUniqueRandomIndexes,
	horizonThumbnail,
	rotationThumbnail,
	verticalThumbnail
} from "../../common/thumbnail";
import logo from '../../asset/images/icon/zestech_logo.png'
import {useNavigate} from "react-router-dom";

const ImageTile = ({ thumbnail, isActive, style }: { thumbnail: any, isActive: boolean, style:CSSProperties }) => {

	const [flickerColor, setFlickerColor] = React.useState<number>(0)
	const scales = [100, 102, 98, 102, 98, 102, 98 ,110]
	React.useEffect(()=>{
		const interval = setInterval(()=>{
			setFlickerColor((color)=>{
				return color === 7? 0 : color + 1
			})
		},1200)
		return () => clearInterval(interval)
	},[])

		const imageCSS = {
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
			backgroundColor:'#d7dbec',
		// border: `2px solid ${isActive ? 'red' : 'transparent'}`,
		zIndex: isActive? 100 : 99,
		transition: 'all 1.2s cubic-bezier(0.25, 0.1, 0.25, 0.1)',
			transform: `scale(${isActive? scales[flickerColor] : 100}%)`
	};

	return (
		<div style={{
				...imageCSS, boxSizing: 'border-box', ...style,
				backgroundImage: `url('${thumbnail.image}')`,
			}}
		/>
	);
};

const ApiLayout = () => {
	const navigate = useNavigate()
	if(!window.localStorage.getItem('totalThumb')){
		window.localStorage.setItem('totalThumb','0')
	}
	if(!window.localStorage.getItem('thumbIndex')){
		window.localStorage.setItem('thumbIndex','0')
	}

	const horizonIndexes = getTwoUniqueRandomIndexes(8)
	const verticalIndexes = getTwoUniqueRandomIndexes(7)
	const randomUrl = () => {
		const randomComponent = [
			horizonThumbnail[horizonIndexes[0]],
			horizonThumbnail[horizonIndexes[1]],
			verticalThumbnail[verticalIndexes[0]],
			verticalThumbnail[verticalIndexes[1]],
		]

		function getRandomInt(min:number, max:number) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		return randomComponent[getRandomInt(0,3)]
	}

	const immutableUrlData = randomUrl()

	// const [rotationThumb, setRotationThumb] = React.useState<number>(0)
	// React.useEffect(()=>{
	// 	const interval = setInterval(()=>{
	// 		setRotationThumb((rotate)=>{
	// 			return rotate === 3? 0 : rotate + 1
	// 		})
	// 	},3000)
	// 	return () => clearInterval(interval)
	// },[])

	const rotationThumbTotalIndex = Number(window.localStorage.getItem('totalThumb'))
	const rotationThumbIndex = Number(localStorage.getItem('thumbIndex'))

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navigate(`/${rotationThumbnail[rotationThumbTotalIndex].thumbnail[rotationThumbIndex].menu}/${rotationThumbnail[rotationThumbTotalIndex].thumbnail[rotationThumbIndex].type}`);
		}, 8000);
		return () => clearTimeout(timeoutId); // Clear timeout on component unmount
	}, [navigate, rotationThumbIndex, rotationThumbTotalIndex]);

	return (
			<div style={{display:'grid', gridTemplateColumns:'1fr 1fr', background:'linear-gradient(135deg, rgba(0,12,156,1) 0%, rgba(0,12,255,1) 100%)'}}>
				<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', height: 'calc(100%)' }}>
					{/*{horizonIndexes.map((index,i: number) => (*/}
					{/*	<ImageTile*/}
					{/*		key={`horizon-${index}`}*/}
					{/*		thumbnail={horizonThumbnail[index]}*/}
					{/*		isActive={*/}
					{/*			horizonThumbnail[index].type === immutableUrlData.type &&*/}
					{/*			horizonThumbnail[index].menu === immutableUrlData.menu*/}
					{/*		}*/}
					{/*		style={{ width: 'calc(50vw)', height: i === 1 ? 'calc(50vh - 3.906vw)' : 'calc(50vh)', margin: '1.302vw', marginTop:'1.302vw', marginBottom: '0px'}}*/}
					{/*	/>*/}
					{/*))}*/}
					<ImageTile
						key={`horizon-${rotationThumbnail[rotationThumbTotalIndex].thumbnail[0].menu}`}
						thumbnail={rotationThumbnail[rotationThumbTotalIndex].thumbnail[0]}
						isActive={
							rotationThumbIndex === 0
						}
						style={{ width: 'calc(50vw)', height: 'calc(50vh)', margin: '1.302vw', marginTop:'1.302vw', marginBottom: '0px'}}
					/>
					<ImageTile
						key={`horizon-${rotationThumbnail[rotationThumbTotalIndex].thumbnail[1].menu}`}
						thumbnail={rotationThumbnail[rotationThumbTotalIndex].thumbnail[1]}
						isActive={
							rotationThumbIndex === 1
						}
						style={{ width: 'calc(50vw)', height: 'calc(50vh - 3.906vw)', margin: '1.302vw', marginTop:'1.302vw', marginBottom: '0px'}}
					/>
				</div>

				<div>
					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
						{/*{verticalIndexes.map((index) => (*/}
						{/*	<ImageTile*/}
						{/*		key={`vertical-${index}`}*/}
						{/*		thumbnail={verticalThumbnail[index]}*/}
						{/*		isActive={*/}
						{/*			verticalThumbnail[index].type === immutableUrlData.type &&*/}
						{/*			verticalThumbnail[index].menu === immutableUrlData.menu*/}
						{/*		}*/}
						{/*		style={{ height: 'calc(84vh - 1.302vw)', marginTop:'1.302vw', marginRight:'1.302vw' }}*/}
						{/*	/>*/}
						{/*))}*/}
						<ImageTile
							key={`vertical-${rotationThumbnail[rotationThumbTotalIndex].thumbnail[2].menu}`}
							thumbnail={rotationThumbnail[rotationThumbTotalIndex].thumbnail[2]}
							isActive={
								rotationThumbIndex === 2
							}
							style={{ height: 'calc(84vh - 1.302vw)', marginTop:'1.302vw', marginRight:'1.302vw' }}
						/>
						<ImageTile
							key={`vertical-${rotationThumbnail[rotationThumbTotalIndex].thumbnail[3].menu}`}
							thumbnail={rotationThumbnail[rotationThumbTotalIndex].thumbnail[3]}
							isActive={
								rotationThumbIndex === 3
							}
							style={{ height: 'calc(84vh - 1.302vw)', marginTop:'1.302vw', marginRight:'1.302vw' }}
						/>
					</div>
					{/*날씨 / 시간 api 위치*/}
					<div style={{backgroundSize:'contain', backgroundRepeat:'no-repeat',backgroundPosition:'center', height:'calc(16vh)', boxSizing:'border-box', backgroundImage:`url('${logo}')`, display:'flex', justifyContent:'center', alignItems:'center'}}/>
				</div>
			</div>

	);
};

export default ApiLayout;
