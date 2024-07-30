import React, {CSSProperties, useEffect} from 'react';

import 'react-slideshow-image/dist/styles.css'
import {getTwoUniqueRandomIndexes, horizonThumbnail, verticalThumbnail} from "../../common/thumbnail";
import logo from '../../asset/images/icon/zestech_logo.png'
import {useNavigate} from "react-router-dom";


const ImageTile = ({ thumbnail, isActive, style }: { thumbnail: any, isActive: boolean, style:CSSProperties }) => {

	const [flickerColor, setFlickerColor] = React.useState<number>(0)
	const scales = [100, 102, 98, 102, 110]
	React.useEffect(()=>{
		const interval = setInterval(()=>{
			setFlickerColor((color)=>{
				return color === 4? 0 : color + 1
			})
		},1200)
		return () => clearInterval(interval)
	},[])

		const imageCSS = {
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		border: `2px solid ${isActive ? 'red' : 'black'}`,
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

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navigate(`/${immutableUrlData.menu}/${immutableUrlData.type}`);
		}, 5000);
		return () => clearTimeout(timeoutId); // Clear timeout on component unmount
	}, [navigate, immutableUrlData.menu, immutableUrlData.type]);


	return (
			<div style={{display:'grid', gridTemplateColumns:'1fr 1fr', background:'linear-gradient(135deg, rgba(0,12,156,1) 0%, rgba(0,12,255,1) 100%)'}}>

				{/*<div style={{display:'grid', gridTemplateRows:'1fr 1fr', height:'100%'}}>*/}
				{/*	<div style={{...imageCSS, backgroundImage:`url('${horizonThumbnail[horizonIndexes[0]].image}')`,*/}
				{/*		border:`2px solid ${(horizonThumbnail[horizonIndexes[0]].type === immutableUrlData.type && horizonThumbnail[horizonIndexes[0]].menu === immutableUrlData.menu) ? 'red' : 'black'}`,*/}
				{/*		width:'50vw', height:'50vh', boxSizing:'border-box'}}>*/}
				{/*	</div>*/}
				{/*	<div style={{...imageCSS, backgroundImage:`url('${horizonThumbnail[horizonIndexes[1]].image}')`,*/}
				{/*		border:`2px solid ${(horizonThumbnail[horizonIndexes[1]].type === immutableUrlData.type && horizonThumbnail[horizonIndexes[1]].menu === immutableUrlData.menu) ? 'red' : 'black'}`,*/}
				{/*		width:'50vw', height:'50vh', boxSizing:'border-box'}}>*/}
				{/*	</div>*/}
				{/*</div>*/}

				<div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', height: '100%' }}>
					{horizonIndexes.map((index) => (
						<ImageTile
							key={`horizon-${index}`}
							thumbnail={horizonThumbnail[index]}
							isActive={
								horizonThumbnail[index].type === immutableUrlData.type &&
								horizonThumbnail[index].menu === immutableUrlData.menu
							}
							style={{ width: '50vw', height: '50vh' }}
						/>
					))}
				</div>



				<div>
					{/*<div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>*/}
					{/*	<div style={{...imageCSS, backgroundImage:`url('${verticalThumbnail[verticalIndexes[0]].image}')`,*/}
					{/*		border:`2px solid ${(verticalThumbnail[verticalIndexes[0]].type === immutableUrlData.type && verticalThumbnail[verticalIndexes[0]].menu === immutableUrlData.menu) ? 'red' : 'black'}`,*/}
					{/*		height:'84vh', boxSizing:'border-box'}}>*/}
					{/*	</div>*/}
					{/*	<div style={{...imageCSS, backgroundImage:`url('${verticalThumbnail[verticalIndexes[1]].image}')`,*/}
					{/*		border:`2px solid ${(verticalThumbnail[verticalIndexes[1]].type === immutableUrlData.type && verticalThumbnail[verticalIndexes[1]].menu === immutableUrlData.menu) ? 'red' : 'black'}`,*/}
					{/*		height:'84vh', boxSizing:'border-box'}}>*/}
					{/*	</div>*/}
					{/*</div>*/}

					<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
						{verticalIndexes.map((index) => (
							<ImageTile
								key={`vertical-${index}`}
								thumbnail={verticalThumbnail[index]}
								isActive={
									verticalThumbnail[index].type === immutableUrlData.type &&
									verticalThumbnail[index].menu === immutableUrlData.menu
								}
								style={{ height: '84vh' }}
							/>
						))}
					</div>



					{/*<ThumbnailComponent id="component5" index={4} isActive={true}*/}
					{/*                    style={{ gridColumn: '1 / 2', gridRow: '3 / 4', backgroundColor: 'lightblue' }} />*/}
					{/*날씨 / 시간 api 위치*/}
					<div style={{backgroundSize:'contain', backgroundRepeat:'no-repeat',backgroundPosition:'center', height:'16vh', boxSizing:'border-box', backgroundImage:`url('${logo}')`, display:'flex', justifyContent:'center', alignItems:'center'}}/>
				</div>
			</div>

	);
};

export default ApiLayout;
