export const Current_Month_Layer_Title = [
	// 25. 1월 컨텐츠
	{title: "겨울철 제설작업 FM으로 알아보자", key:"001"},
	{title: "엄동설한", key:"002"},
	{title: "그림으로 알아보는 4대 금지 캠페인", key:"003"},
	{title: "작지만 무서운 정전기의 위험성과 예방 방법", key:"004"},
	{title: "소화기 사용방법", key:"005"},

	{title: "이런 화재엔 어떤 소화기 한번에 확인하기", key:"006"},
	{title: "한눈에 알아보는 동절기 넘어짐 사고 예방법(롤)", key:"007"},
	{title: "기본 응급처치 요령 - 골절", key:"008"},
	{title: "점검되지 않은 설비가 나타났다!", key:"009"},
	{title: "그림으로 알아보는 안전보호구 착용하기", key:"010"},

	{title: "간단해 보이는 드릴링 작업 안전하게 작업하자", key:"011"},
	{title: "운반의 기본, 인력운밥 바로 알기", key:"012"},
	{title: "안전한 운반을 도와줄 보조운반장비 안전수칙", key:"013"},
	{title: "근골격계질환 예방하기", key:"014"},
	{title: "사례로 알아보는 안전한 현장 만들기 - 보조운반장비", key:"015"},

	{title: "사례로 알아보는 안전한 현장 만들기 - 전복된 지게차에 깔림", key:"016"},
	{title: "산업안전 관련 퀴즈", key:"017"},
	{title: "겨울 한파 안전하게 보내기", key:"018"},
	//12월 컨텐츠
	{title: "겨울철 산업현장 안전 지키기", key:"019"},
	{title: "비상대피 시설 설치·운영 가이드", key:"020"},

	{title: "안전단어퀴즈 - 십자말풀이", key:"021"},
	{title: "작업중지권", key:"022"},
	{title: "사례 - 동절기 사고 사례(저온화상)", key:"023"},
	{title: "작업장에서 중요한 정리정돈", key:"024"},
	{title: "안전한 보호구 착용 - 방음용 보호구", key:"025"},

	{title: "기본응급처치요령 - 화상", key:"026"},
	{title: "안전장치 해제 금지의 중요성", key:"027"},
	{title: "사례 - 동절기 사고 사례(화재)", key:"028"},
	{title: "중대재해처벌법 관련 퀴즈", key:"029"},
	{title: "사례 - 정리정돈 미비로 인한 사고", key:"030"},

	{title: "사업장 환기 - 국소배기장치", key:"031"},
	{title: "작업자의 TBM 내용 숙지여부 확인 방법", key:"032"},
	{title: "외국인 정리정돈", key:"033"},
	{title: "안전을 위한 방호장치의 종류", key:"034"},
	{title: "산업안전 바로 알기 OX퀴즈", key:"035"},

	{title: "국소배기장치 성능평가 가이드", key:"036"},
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
	{ images: [], video: generateVideo("title1", "video1.mp4") },
	{ images: generateImages("title2", 18) },
	{ images: generateImages("title3", 13) },
	{ images: [], video: generateVideo("title4", "video4.mp4") },
	{ images: generateImages("title5", 27) },
	{ images: generateImages("title6", 30) },
	{ images: [], video: generateVideo("title7", "video7.mp4") },
	{ images: generateImages("title8", 24) },
	{ images: [], video: generateVideo("title9", "video9.mp4") },
	{ images: generateImages("title10", 16) },
	{ images: [], video: generateVideo("title11", "video11.mp4") },
	{ images: generateImages("title12", 30) },
	{ images: generateImages("title13", 38) },
	{ images: generateImages("title14", 30) },
	{ images: generateImages("title15", 18) },
	{ images: [], video: generateVideo("title16", "video16.mp4") },
	{ images: generateImages("title17", 39) },
	{ images: [], video: generateVideo("title18", "video18.mp4") },
	{ images: generateImages("title19", 34) },
	{ images: generateImages("title20", 23) },
	{ images: generateImages("title21", 28) },
	{ images: generateImages("title22", 30) },
	{ images: generateImages("title23", 17) },

	{ images: generateImages("title24", 38) },
	{ images: generateImages("title25", 33) },
	{ images: generateImages("title26", 47) },
	{ images: generateImages("title27", 18) },
	{ images: generateImages("title28", 17) },
	{ images: generateImages("title29", 30) },
	{ images: generateImages("title30", 17) },
	{ images: generateImages("title31", 36) },
	{ images: generateImages("title32", 27) },
	{ images: generateImages("title33", 15) },
	{ images: generateImages("title34", 15) },
	{ images: generateImages("title35", 16) },
	{ images: generateImages("title36", 6) ,
		imageMoveType: {
			type: 'slide',
			vertical: true
		}
	},
];
