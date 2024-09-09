import React, {useEffect, useState} from 'react';
import logo from '../../asset/images/sample/zestech_logo.svg'
import calendar_frame from '../../asset/images/sample/Rectangle.png'
import preview_bg from '../../asset/images/sample/preview_bg.png'
import time_bg from '../../asset/images/sample/time_bg.png'
import weather_bg from '../../asset/images/sample/weather_bg.png'
import axios from "axios";
import dayjs, {Dayjs} from "dayjs";
import {Current_Month_Layer_Title} from "../../common/dataSet";
import {useNavigate} from "react-router-dom";
import CardMenuList from "../menu/CardMenuList";
import styled from "styled-components";
import InlineCalendar from "../calendar/InlineCalendar";

const MainLayOut = () => {

    // const ImageTile = ({ style, children }: { style?:CSSProperties, children?: any }) => {
    //     const imageCSS = {
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'contain',
    //         backgroundColor:'#00aaff',
    //         borderRadius:'1.8vw', boxShadow:'0 8px 8px 0 rgba(0,0,0,0.25)',
    //         boxSizing:'border-box',
    //         // border: `2px solid ${isActive ? 'red' : 'transparent'}`,
    //     };
    //
    //     return (
    //         <div style={{
    //             ...imageCSS, boxSizing: 'border-box', ...style,
    //         }}
    //         >{children}</div>
    //     );
    // };

    const [weather, setWeather] = useState<any>({})
    const WEATHER_APP_KEY = '9956f957223b8ef2a21d8b11622e63f5'

    const getWeather = async(lat:string|number, lon: string|number) => {
        try {
            const res = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_APP_KEY}&units=metric&`
            );
            const weatherIcon = res.data.weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            setWeather( {...res.data.main, icon: weatherIconAdrs})
        } catch (err){
            console.log(err);
        }
    };

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeather(lat, lon).then();
        });
    }, []);

    const getPageData = (data: any[], start: number, pageSize: number) => {
        const totalLength = data.length;
        const result = [];

        for (let i = 0; i < pageSize; i++) {
            const index = (start + i) % totalLength; // 배열 끝을 넘으면 처음으로 돌아옴
            result.push(data[index]);
        }

        return result;
    };

    const navigate = useNavigate()
    const sectionNumber = window.sessionStorage.getItem('sectionNumber')

    // const sectionArray = Array(24).fill(0).map((v,i)=>(v+i))
    // console.log(sectionArray)

    // const shuffleArray = (arr: any[]): any[] => {
    //     return arr.sort(() => Math.random() - 0.5); // 무작위 정렬
    // }
    //
    // console.log(shuffleArray(Current_Month_Layer_Title))

    if(!sectionNumber){
        window.sessionStorage.setItem('sectionNumber', '0')
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate(`/section${sectionNumber}`);
        }, 8000);
        return () => clearTimeout(timeoutId); // Clear timeout on component unmount
    }, [navigate]);

    const [realTime, setRealTime] = useState<Dayjs>(dayjs())

    useEffect(()=>{
        const interval = setInterval(() => {
            setRealTime(dayjs())
        }, 1000);
        return () => clearInterval(interval); // Clear timeout on component unmount
    },[])

    return (
        <div style={{width:'100vw', height:'100vh', userSelect:'none',
            display: 'grid', gap:'1.5vw', padding:'1.5vw', boxSizing:'border-box',
            gridTemplateColumns: '1fr 1fr', gridTemplateRows:'1fr 1fr',
            background: 'radial-gradient(circle, #287EFF -90%, #0037FF 100%)'
        }}>
            <div style={{width:'100%', height:'100%', borderRadius:'1.5vw', padding:'3.2vw 2.5vw 0', boxSizing:'border-box',
                backgroundSize:'103.5%', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundImage:`url('${preview_bg}')`}}>
                <div style={{fontSize:'2.5vw', fontWeight:700, color:'#A4D8FF', marginBottom:'0.8vw'}}>{'카드뉴스로 보는'}</div>
                {/*<div style={{fontSize:'3.5vw', fontWeight:700, lineHeight:'3.5vw', color:'#fff', whiteSpace:'pre-line'}}>{'안전보건 관리체계 \n 7가지 핵심요소'}</div>*/}
                <div style={{fontSize:'3.5vw', fontWeight:700, lineHeight:'3.5vw', color:'#fff', whiteSpace:'pre-line'}}>{Current_Month_Layer_Title[Number(sectionNumber)].title}</div>
            </div>

            <SectionListCard>
                <div style={{fontSize:'3.5vw', fontWeight:700, color:'#fff', zIndex:5, position:'relative',
                    marginBottom:'0.8vw', textAlign:'center'}}>{`${realTime.format('M')}월의 안전보건`}</div>
                <div style={{display:'grid', gap:'0.9375vw', alignItems:'center', zIndex:5, position:'relative'}}>
                    {getPageData(Current_Month_Layer_Title, Number(sectionNumber) + 1, 4).map((v, i) => (
                        <CardMenuList
                            key={v.key}
                            title={v.title}
                        />
                    ))}
                </div>
            </SectionListCard>

            <CalendarCard>
                <div style={{fontSize:'6.25vw', fontWeight:500, color:'#fff', maxWidth:'16.66vw',  zIndex:5, position:'relative',
                    boxSizing:'border-box', textAlign:'right', marginRight:'1.2vw'}}>{realTime.format('YYYY\nM월\nDD일')}</div>
                <div style={{backgroundColor:'#000e55', width:'22.29vw', height:'22.29vw', borderRadius:'1.5625vw', color:'#fff', zIndex:5, position:'relative', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    {/*<div style={{display:'flex',justifyContent:'center', alignItems:'center', backgroundRepeat:'no-repeat', width:'100%', height:'100%',*/}
                    {/*    backgroundPosition:'center', backgroundImage:`url('${calendar_frame}')`}} />*/}
                    <InlineCalendar/>
                </div>
            </CalendarCard>

            <div style={{width:'100%', height:'100%', borderRadius:'1.5vw', boxSizing:'border-box'}}>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5vw'}}>
                    <WeatherCard>
                        <div style={{display:'flex', alignItems:'flex-end', zIndex:5, position:'relative'}}>
                            <div style={{width:'13.6vw', display:'block', minWidth:'13.6vw',backgroundRepeat:'no-repeat',
                                backgroundPosition:'center', backgroundSize:'cover',
                                minHeight:'13.6vw', backgroundImage:`url(${weather?.icon})`}}  />
                            <div>
                                <div style={{fontSize:'1.5625vw', color:'#FF997D'}}>{'최고 '}<span style={{fontSize:'2.34375vw'}}>{!Math.floor(weather?.temp_max)? '00' : Math.floor(weather?.temp_max)}</span></div>
                                <div style={{fontSize:'1.5625vw', color:'#A2E9F4'}}>{'최저 '}<span style={{fontSize:'2.34375vw'}}>{!Math.floor(weather?.temp_min)? '00' : Math.floor(weather?.temp_min)}</span></div>
                            </div>
                        </div>
                        <div style={{display:'flex', color:'#fff', justifyContent:'flex-end', zIndex:5, position:'relative',
                            alignItems:'flex-end', marginTop:'2.2vw',boxSizing:'border-box', padding:'0 1.2vw'}}>
                            <div style={{fontSize:'2.5vw'}}>{'현재 '}</div>
                            <div style={{fontSize:'7.91vw', lineHeight:'6.5vw'}}>{!Math.floor(weather?.temp) ? '00' : Math.floor(weather?.temp)}</div>
                        </div>
                    </WeatherCard>

                    <TimeCard>
                        <div style={{fontSize:'6.25vw', textAlign:'center', whiteSpace:'pre-line', zIndex:5, position:'relative'}}>
                            {realTime.format('hh시\n mm분')}
                        </div>
                        <div style={{fontWeight:300, fontSize:'2.5vw', marginTop:'1.8vw', zIndex:5, position:'relative'}}>{realTime.format('HH:mm:ss')}</div>
                    </TimeCard>
                </div>

                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img src={logo} style={{width:'100%', maxWidth:'10.4vw', alignItems:'center' }} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainLayOut;

const SectionListCard = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1.5vw;
    padding: 1.5vw 2vw;
    box-sizing: border-box;
    box-shadow: 0 8px 8px rgba(0,0,0,0.25);
    position: relative;
    &::before {
        top: 0;
        left: 0;
        border-radius: 1.5vw;
        overflow: hidden;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-size: 103%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(${preview_bg});
    }
    &::after {
        top: 0;
        left: 0;
        border-radius: 1.5vw;
        overflow: hidden;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #0014c1;
        z-index: 1;
        opacity: 0.5;
    }
`

const CalendarCard = styled.div`
    width: 100%;
    height: auto;
    border-radius: 1.5vw;
    padding: 2vw;
    box-sizing: border-box;
    background-color: #0019B1;
    display: flex;
    justify-content: center;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.25);
    position: relative;
    max-height: 25.65vw;
    &::before {
        top: 0;
        left: 0;
        border-radius: 1.5vw;
        overflow: hidden;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-size: 104%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(${preview_bg});
    }
    &::after {
        top: 0;
        left: 0;
        border-radius: 1.5vw;
        overflow: hidden;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #0014c1;
        z-index: 1;
        opacity: 0.5;
    }
    
`

const WeatherCard = styled.div`
    width: 22.92vw;
    height: 22.92vw;
    border-radius: 1.5vw;
    background-color: #0019B1;
    position: relative;
    z-index: 1;
    &::before {
        top: 0;
        left: 0;
        border-radius: 1.5vw;
        overflow: hidden;
        content: '';
        position: absolute;
        width: 22.92vw;
        height: 22.92vw;
        z-index: 1;
        background-size: 102%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(${weather_bg});
    }
    &::after {
        top: 0;
        left: 0;
        border-radius: 1.5vw;
        overflow: hidden;
        content: '';
        position: absolute;
        width: 22.92vw;
        height: 22.92vw;
        background-color: #0014c1;
        z-index: 1;
        opacity: 0.5;
    }
`

const TimeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 22.92vw;
    height: 22.92vw;
    border-radius: 1.5vw;
    color: #fff;
    position: relative;
    &::before {
        top: 0;
        left: 0;
        border-radius: 1.5vw;
        overflow: hidden;
        content: '';
        position: absolute;
        width: 22.92vw;
        height: 22.92vw;
        z-index: 1;
        background-size: 102%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(${time_bg});
    }
    
    &::after {
        top: 0;
        left: 0;
        border-radius: 1.5vw;
        overflow: hidden;
        content: '';
        position: absolute;
        width: 22.92vw;
        height: 22.92vw;
        background-color: #0014c1;
        z-index: 1;
        opacity: 0.5;
    }
`
