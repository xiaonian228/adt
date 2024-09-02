import React, {CSSProperties, useState} from 'react';
import logo from '../../asset/images/sample/zestech_logo.svg'
import samplePreview from '../../asset/images/sample/preview.svg'
import sampleUpNext from '../../asset/images/sample/upnext.svg'
import sampleCalendar from '../../asset/images/sample/calendar.svg'
import sampleInfos from '../../asset/images/sample/infos.svg'
import calendar_frame from '../../asset/images/sample/Rectangle.png'
import preview_bg from '../../asset/images/sample/preview_bg.png'
import axios from "axios";
import dayjs from "dayjs";
import {Current_Month_Layer_Title} from "../../common/dataSet";
import {AutoTextSize} from "auto-text-size";


const MainLayOut = () => {
    const ImageTile = ({ style, children }: { style?:CSSProperties, children?: any }) => {
        const imageCSS = {
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundColor:'#00aaff',
            borderRadius:'1.8vw', boxShadow:'0 8px 8px 0 rgba(0,0,0,0.25)',
            boxSizing:'border-box',
            // border: `2px solid ${isActive ? 'red' : 'transparent'}`,
        };

        return (
            <div style={{
                ...imageCSS, boxSizing: 'border-box', ...style,
            }}
            >{children}</div>
        );
    };

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
        console.log()
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeather(lat, lon).then();
        });
    }, []);
    console.log(weather)
    return (
        <div style={{width:'100vw', height:'100vh',
            display: 'grid', gap:'1.5vw', padding:'1.5vw', boxSizing:'border-box',
            gridTemplateColumns: '1fr 1fr', gridTemplateRows:'1fr 1fr',
            background: 'radial-gradient(circle, #287EFF -90%, #0037FF 100%)'
        }}>
            {/*<ImageTile style={{padding:'2.8vw'}}>*/}
            {/*    <div style={{fontSize:'2.5vw', fontWeight:700, color:'#A4D8FF'}}>{'카드뉴스로 보는'}</div>*/}
            {/*    <div style={{fontSize:'3vw', fontWeight:700, color:'#fff', whiteSpace:'pre-line'}}>{'안전보건 관리체계 \n 7가지 핵심요소'}</div>*/}
            {/*</ImageTile>*/}
            <div style={{width:'100%', height:'100%', borderRadius:'1.5vw', padding:'3.2vw 2.5vw 0', boxSizing:'border-box',
                backgroundSize:'102%', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundImage:`url('${preview_bg}')`}}>
                <div style={{fontSize:'2.5vw', fontWeight:700, color:'#A4D8FF', marginBottom:'0.8vw'}}>{'카드뉴스로 보는'}</div>
                <div style={{fontSize:'3.5vw', fontWeight:700, lineHeight:'3.5vw', color:'#fff', whiteSpace:'pre-line'}}>{'안전보건 관리체계 \n 7가지 핵심요소'}</div>
            </div>
            <div style={{width:'100%', height:'100%', borderRadius:'1.5vw', padding:'1.5vw 2vw', boxSizing:'border-box',
                backgroundColor:'#0014C1', boxShadow:'0 8px 8px 0 rgba(0,0,0,0.25)'}}>
                <div style={{fontSize:'3.5vw', fontWeight:700, color:'#fff', marginBottom:'0.8vw', textAlign:'center'}}>{'9월의 안전보건'}</div>
                <div style={{display:'grid', gap:'0.9375vw', alignItems:'center'}}>
                    {Current_Month_Layer_Title.slice(5,9).map((v)=>(
                      <div key={v.key} style={{width:'auto', height:'3.75vw', fontSize:'2.8125vw', fontWeight:700, color:'#001f77', borderRadius:'1.5vw', backgroundColor:'#b2b8e8',
                          display:'flex',alignItems:'center', justifyContent:'center', maxWidth:'calc(100% - 4vw)'}}>
                          <AutoTextSize maxFontSizePx={54} minFontSizePx={10} style={{lineHeight:'72px'}}>
                            {v.title}
                          </AutoTextSize>
                      </div>
                    ))}


                    {/*<div style={{height:'3.75vw', fontSize:'2.8125vw', fontWeight:700, color:'#001f77', borderRadius:'1.5vw', backgroundColor:'#b2b8e8',*/}
                    {/*    display:'flex',alignItems:'center', justifyContent:'center', verticalAlign:''}}>*/}
                    {/*    {'프레스 산업군 안전사고'}*/}
                    {/*</div>*/}
                    {/*<div style={{height:'3.75vw', fontSize:'2.8125vw', fontWeight:700, color:'#001f77', borderRadius:'1.5vw', backgroundColor:'#b2b8e8',*/}
                    {/*    display:'flex',alignItems:'center', justifyContent:'center'}}>*/}
                    {/*    {'중대재해처벌법 알아보기'}*/}
                    {/*</div>*/}
                    {/*<div style={{height:'3.75vw', fontSize:'2.8125vw', fontWeight:700, color:'#001f77', borderRadius:'1.5vw', backgroundColor:'#b2b8e8',*/}
                    {/*    display:'flex',alignItems:'center', justifyContent:'center'}}>*/}
                    {/*    {'밀폐공간작업을 위한 핵심 수칙'}*/}
                    {/*</div>*/}
                    {/*<div style={{height:'3.75vw', fontSize:'2.8125vw', fontWeight:700, color:'#001f77', borderRadius:'1.5vw', backgroundColor:'#b2b8e8',*/}
                    {/*    display:'flex',alignItems:'center', justifyContent:'center'}}>*/}
                    {/*    {'코로나19 재확산방지 5대수칙'}*/}
                    {/*</div>*/}
                </div>
            </div>
            <div style={{width:'100%', height:'100%', borderRadius:'1.5vw', padding:'1.2vw 2.5vw', boxSizing:'border-box',
                backgroundColor:'#0019B1', display:'flex', justifyContent:'center',boxShadow:'0 8px 8px 0 rgba(0,0,0,0.25)'}}>
                <div style={{fontSize:'6.25vw', fontWeight:500, color:'#fff', maxWidth:'16.66vw', boxSizing:'border-box', textAlign:'right', marginRight:'1.2vw'}}>{dayjs().format('YYYY\nM월\nDD일')}</div>
                <div style={{backgroundColor:'#000e55', width:'22.29vw', height:'22.29vw', borderRadius:'1.5625vw', color:'#fff'}}>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center', backgroundRepeat:'no-repeat', width:'100%', height:'100%',
                        backgroundPosition:'center', backgroundImage:`url('${calendar_frame}')`}} />
                </div>
            </div>
            <div style={{width:'100%', height:'100%', borderRadius:'1.5vw', boxSizing:'border-box'}}>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5vw'}}>
                    <div style={{width:'22.92vw', height:'22.92vw',borderRadius:'1.5vw', backgroundColor:'#0019B1'}}>
                        <div style={{display:'flex', alignItems:'flex-end'}}>
                            <img style={{width:'13.6vw', display:'block'}} src={weather?.icon} alt=""/>
                            <div>
                                <div style={{fontSize:'1.5625vw', color:'#FF997D'}}>{'최고 '}<span style={{fontSize:'2.34375vw'}}>{Math.floor(weather?.temp_max)}</span></div>
                                <div style={{fontSize:'1.5625vw', color:'#A2E9F4'}}>{'최저 '}<span style={{fontSize:'2.34375vw'}}>{Math.floor(weather?.temp_min)}</span></div>
                            </div>
                        </div>
                        <div style={{display:'flex', color:'#fff', justifyContent:'flex-end', alignItems:'flex-end', marginTop:'2.2vw',boxSizing:'border-box', padding:'0 1.2vw'}}>
                            <div style={{fontSize:'2.5vw'}}>{'현재 '}</div>
                            <div style={{fontSize:'7.91vw', lineHeight:'6.5vw'}}>{Math.floor(weather?.temp)}</div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'22.92vw', height:'22.92vw',borderRadius:'1.5vw', backgroundColor:'#0019B1', color:'#fff'}}>
                        <div style={{fontSize:'6.25vw', textAlign:'center', whiteSpace:'pre-line'}}>
                            {dayjs().format('hh시\n mm분')}
                        </div>
                        <div style={{fontWeight:300, fontSize:'2.5vw', marginTop:'1.8vw'}}>{dayjs().format('HH:mm:ss')}</div>
                    </div>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img src={logo} style={{width:'100%', maxWidth:'10.4vw', alignItems:'center' }} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainLayOut;
