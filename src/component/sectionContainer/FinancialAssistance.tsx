import React, {useEffect, useState} from 'react';
import {Fade} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import section1 from '../../asset/section/title18/section1.jpg'
import section2 from '../../asset/section/title18/section2.jpg'
import section3 from '../../asset/section/title18/section3.jpg'
import section4 from '../../asset/section/title18/section4.jpg'
import section5 from '../../asset/section/title18/section5.jpg'
import section6 from '../../asset/section/title18/section6.jpg'
import section7 from '../../asset/section/title18/section7.jpg'
import section8 from '../../asset/section/title18/section8.jpg'
import section9 from '../../asset/section/title18/section9.jpg'
import section10 from '../../asset/section/title18/section10.jpg'
import section11 from '../../asset/section/title18/section11.jpg'
import section12 from '../../asset/section/title18/section12.jpg'

import {useLocation, useNavigate} from "react-router-dom";

const FinancialAssistance = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (previous: number, next: number) => {
        setCurrentIndex(next);
    }

    const imageArray = [
        section1, section2, section3, section4, section5, section6, section7, section8, section9, section10,
        section11, section12,
    ]

    const navigate = useNavigate()
    const {pathname} = useLocation()
    window.sessionStorage.setItem('sectionNumber', (Number(pathname[pathname.length-1])+1).toString())
    useEffect(()=>{
        if(currentIndex === imageArray.length - 1){
            setTimeout(()=>{
                navigate('/main')
            },8000)
        }
    },[currentIndex])

    const timerControl = [
        2, 2, 2, 2, 5,
        3, 7,
        3, 7,
        3, 3, 8,
    ]

    return (
        <div style={{
            backgroundImage: `url('${imageArray[currentIndex]}')`,
            width: '100%', height: '100vh', cursor: 'pointer',
            backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}>
            <Fade
                duration={timerControl[currentIndex]*1000} transitionDuration={500} pauseOnHover={false}
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
        </div>
    );
};

export default FinancialAssistance;
