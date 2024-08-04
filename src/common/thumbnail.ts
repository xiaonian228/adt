import disasterHorizon from '../asset/images/disaster/horizon/normal1.jpg'
import disasterVertical from '../asset/images/disaster/vertical/back1.png'

import heatHorizon from '../asset/images/heat/horizon/normal14.jpg'
import heatVertical from '../asset/images/heat/vertical/normal3.png'

import lawHorizon from '../asset/images/laws/horizon/normal1.png'
import lawVertical from '../asset/images/laws/vertical/normal1.jpg'

import safeHorizon from '../asset/images/safe/horizon/back1.png'
import safeVertical from '../asset/images/safe/vertical/normal1.jpg'

import signHorizon from '../asset/images/signs/horizon/back1.png'
import signVertical from '../asset/images/signs/vertical/normal13.jpg'

import workerHorizon from '../asset/images/workers/horizon/normal1.jpg'
import workerVertical from '../asset/images/workers/vertical/normal1.png'

import workToolHorizon from '../asset/images/worktools/horizon/normal1.jpg'
import workToolVertical from '../asset/images/worktools/vertical/normal19.png'

import posterHorizon from '../asset/images/poster/horizon/normal8.jpg'
import posterVertical from '../asset/images/poster/vertical/normal1.png'

export const horizonThumbnail = [
	{image: safeHorizon, menu: 'safe', type:'horizon'},
	{image: lawHorizon, menu: 'law', type:'horizon'},
	{image: disasterHorizon, menu: 'disaster', type: 'horizon' },
	{image: heatHorizon, menu: 'heat', type:'horizon'},
	{image: workToolHorizon, menu: 'workTool', type:'horizon'},
	{image: signHorizon, menu: 'sign', type:'horizon'},
	{image: workerHorizon, menu: 'worker', type:'horizon'},
	{image: posterHorizon, menu: 'poster', type:'horizon'},
]
export const verticalThumbnail = [
	{image: safeVertical, menu: 'safe', type:'vertical'},
	{image: lawVertical, menu: 'law', type:'vertical'},
	{image: disasterVertical, menu: 'disaster', type:'vertical'},
	{image: heatVertical, menu: 'heat', type:'vertical'},
	{image: workToolVertical, menu: 'workTool', type:'vertical'},
	{image: signVertical, menu: 'sign', type:'vertical'},
	{image: workerVertical, menu: 'worker', type:'vertical'},
	{image: posterVertical, menu: 'poster', type:'vertical'},
]

export const rotationThumbnail = [
	{
		thumbnail:[
			{image: safeHorizon, menu: 'safe', type:'horizon', },
			{image: lawHorizon, menu: 'law', type:'horizon'},
			{image: disasterVertical, menu: 'disaster', type:'vertical'},
			{image: heatVertical, menu: 'heat', type:'vertical'},
		],
	},
	{
		thumbnail:[
			{image: disasterHorizon, menu: 'disaster', type: 'horizon' },
			{image: heatHorizon, menu: 'heat', type:'horizon'},
			{image: workToolVertical, menu: 'workTool', type:'vertical'},
			{image: signVertical, menu: 'sign', type:'vertical'},
		],
	},
	{
		thumbnail:[
			{image: workToolHorizon, menu: 'workTool', type:'horizon'},
			{image: signHorizon, menu: 'sign', type:'horizon'},
			{image: workerVertical, menu: 'worker', type:'vertical'},
			{image: posterVertical, menu: 'poster', type:'vertical'},
		],
	},
	{
		thumbnail:[
			{image: workerHorizon, menu: 'worker', type:'horizon'},
			{image: posterHorizon, menu: 'poster', type:'horizon'},
			{image: safeVertical, menu: 'safe', type:'vertical'},
			{image: lawVertical, menu: 'law', type:'vertical'},
		],
	},
]

export function getTwoUniqueRandomIndexes(count:number) {
	const index1 = Math.floor(Math.random() * count ?? 1);
	let index2;
	do {
		index2 = Math.floor(Math.random() * count ?? 1);
	} while (index2 === index1);

	return [index1, index2];
}
