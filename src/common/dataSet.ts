export const Current_Month_Layer_Title = [
	// 25. 1월 컨텐츠
	{title: "춘곤증", key:"001"},
	{title: "휴대용 연삭기", key:"002"},
	{title: "용접용보안면 제대로 알기", key:"003"},
	{title: "용접작업 시 발생할 수 있는 사고 예방법", key:"004"},
	{title: "점검되지 않은 설비가 나타났다!-고속절단기", key:"005"},

	{title: "손이 보내는 SOS신호", key:"006"},
	{title: "안전색채 알아보기", key:"007"},
	{title: "색과 안전의 관계", key:"008"},
	{title: "비상 상황 시 근로자 대피 대응 조치", key:"009"},
	{title: "산업현장 3대 악성 사망사고-충돌", key:"010"},

	{title: "산업안전수칙 퀴즈", key:"011"},
	{title: "더 쉬워진 위험성평가시스템", key:"012"},
]

type SectionTypes = {
	images: string[],
	timer?: number[]
	video?: string,
	imageMoveType?:{
		type: 'fade' | 'slide'
		vertical?: boolean
	}
}

const generateImages = (title: string, count: number) =>
	Array.from({ length: count }, (_, index) =>
		require(`../asset/section/${title}/section-${String(index + 1).padStart(2, '0')}.jpg`)
	);

const generateVideo = (title: string, videoName: string) =>
	require(`../asset/section/${title}/${videoName}`);


export const SectionData: SectionTypes[] = [
	{ images: generateImages("title1", 14) },
	{ images: [], video: generateVideo("title2", "video.mp4") },
	{ images: generateImages("title3", 8) },
	{ images: generateImages("title4", 42) },
	{ images: [], video: generateVideo("title5", "video.mp4") },
	{ images: [], video: generateVideo("title6", "video.mp4") },
	{ images: generateImages("title7", 14) },
	{ images: [], video: generateVideo("title8", "video.mp4") },
	{ images: generateImages("title9", 7) },
	{ images: [], video: generateVideo("title10", "video.mp4") },
	{ images: generateImages("title11", 25) },
	{ images: [], video: generateVideo("title12", "video.mp4") },
	// { images: generateImages("title36", 6) ,
	// 	imageMoveType: {
	// 		type: 'slide',
	// 		vertical: true
	// 	}
	// },
];