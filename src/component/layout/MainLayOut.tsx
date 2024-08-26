import React, {CSSProperties, useState} from 'react';
import logo from '../../asset/images/sample/zestech_logo.svg'
import samplePreview from '../../asset/images/sample/preview.svg'
import sampleUpNext from '../../asset/images/sample/upnext.svg'
import sampleCalendar from '../../asset/images/sample/calendar.svg'
import sampleInfos from '../../asset/images/sample/infos.svg'

import preview_bg from '../../asset/images/sample/preview_bg.png'
import axios from "axios";


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
            gridTemplateColumns: '1fr 1fr',
            background: 'radial-gradient(circle, #287EFF -90%, #0037FF 100%)'
        }}>
            {/*<ImageTile style={{padding:'2.8vw'}}>*/}
            {/*    <div style={{fontSize:'2.5vw', fontWeight:700, color:'#A4D8FF'}}>{'카드뉴스로 보는'}</div>*/}
            {/*    <div style={{fontSize:'3vw', fontWeight:700, color:'#fff', whiteSpace:'pre-line'}}>{'안전보건 관리체계 \n 7가지 핵심요소'}</div>*/}
            {/*</ImageTile>*/}
            <div style={{width:'100%', height:'100%', borderRadius:'8px',
                backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundImage:`url('${preview_bg}')`}}>
            </div>
            {/*<img src={samplePreview} style={{width:'100%', height:'100%'}} alt=""/>*/}
            <img src={sampleUpNext} style={{width:'100%'}} alt=""/>
            <img src={sampleCalendar} style={{width:'100%'}} alt=""/>
            <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
                <img src={sampleInfos} style={{width:'100%'}} alt=""/>
                <div style={{display:'flex'}}>
                    <img src={logo} style={{width:'100%', maxWidth:'6.5vw', alignItems:'center', margin:'0 auto' }} alt=""/>
                </div>
            </div>
            {/*<div style={{backgroundImage:`url('${samplePreview}')`, */}
            {/*    backgroundPosition: 'center',*/}
            {/*    backgroundRepeat: 'no-repeat',*/}
            {/*    backgroundSize: 'cover',*/}
            {/*    backgroundColor:'#00aaff',*/}
            {/*    borderRadius:'1.8vw', }}/>*/}

        </div>
    );
};

export default MainLayOut;
