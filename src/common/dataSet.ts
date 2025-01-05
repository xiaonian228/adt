export const Current_Month_Layer_Title = [
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
]

type SectionTypes = {
	images: string[],
	timer?: number[]
	video?: string
}[]

export const SectionData:SectionTypes = [
	{
		images: [],
		video: require(`../asset/section/title1/video1.mp4`)
	},
	{
		images: Array.from({ length: 18 }, (_, index) =>
			require(`../asset/section/title2/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: Array.from({ length: 13 }, (_, index) =>
			require(`../asset/section/title3/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: [],
		video: require(`../asset/section/title4/video4.mp4`)
	},
	{
		images: Array.from({ length: 27 }, (_, index) =>
			require(`../asset/section/title5/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: Array.from({ length: 30 }, (_, index) =>
			require(`../asset/section/title6/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: [],
		video: require(`../asset/section/title7/video7.mp4`)
	},
	{
		images: Array.from({ length: 24 }, (_, index) =>
			require(`../asset/section/title8/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: [],
		video: require(`../asset/section/title9/video9.mp4`)
	},
	{
		images: Array.from({ length: 16 }, (_, index) =>
			require(`../asset/section/title10/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: [],
		video: require(`../asset/section/title11/video11.mp4`)
	},
	{
		images: Array.from({ length: 30 }, (_, index) =>
			require(`../asset/section/title12/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: Array.from({ length: 38 }, (_, index) =>
			require(`../asset/section/title13/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: Array.from({ length: 30 }, (_, index) =>
			require(`../asset/section/title14/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: Array.from({ length: 18 }, (_, index) =>
			require(`../asset/section/title15/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: [],
		video: require(`../asset/section/title16/video16.mp4`)
	},
	{
		images: Array.from({ length: 39 }, (_, index) =>
			require(`../asset/section/title17/section-${String(index + 1).padStart(2, '0')}.jpg`)
		),
	},
	{
		images: [],
		video: require(`../asset/section/title18/video18.mp4`)
	},
]