import React, {useEffect, useState} from 'react';
import {Fade} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import {useLocation, useNavigate} from "react-router-dom";
import ReactPlayer from "react-player";

interface Section_Types {
    imageArray: string[]
    timerControl?: number[]
    video?: string
}

const SectionLayout:React.FC<Section_Types> = ({imageArray, timerControl, video}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (previous: number, next: number) => {
        setCurrentIndex(next);
    }

    const navigate = useNavigate()
    const {pathname} = useLocation()

    window.sessionStorage.setItem('sectionNumber', (Number(pathname.split('_')[1]) + 1).toString())

    useEffect(()=>{
        if((currentIndex === imageArray.length - 1) && !video){
            setTimeout(()=>{
                navigate('/main')
            },8000)
        }
    },[currentIndex])

    const videoOutNavigate = () => setTimeout(()=>{
        navigate('/main')
    },3000)

    return (
        <div style={{
            backgroundImage: `url('${imageArray[currentIndex]}')`,
            width: '100%', height: '100vh', cursor: 'pointer',
            backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}>
            {video ?
                <ReactPlayer url={video} width={'100vw'} height={'100vh'}
                             playing onEnded={videoOutNavigate}
                             muted />
                :
                <Fade
                    duration={(timerControl ? (timerControl[currentIndex] * 1000) : 1500)} transitionDuration={500} pauseOnHover={false}
                    defaultIndex={0} onChange={handleChange} infinite={false}
                    autoplay={true} arrows={false} canSwipe={false}>
                    {imageArray.map((img, i) => (
                        <div key={i}>
                            <div style={{
                                backgroundImage: `url('${img}')`, width: '100%', height: '100vh', cursor: 'pointer',
                                backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                            }}/>
                        </div>
                    ))}
                </Fade>
            }
        </div>
    );
};

export default SectionLayout;
