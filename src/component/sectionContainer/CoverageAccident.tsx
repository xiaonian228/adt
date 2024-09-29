import React, {useEffect, useState} from 'react';
import {Fade} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import section1 from '../../asset/section/title30/section1.jpg'
import section2 from '../../asset/section/title30/section2.jpg'
import section3 from '../../asset/section/title30/section3.jpg'
import section4 from '../../asset/section/title30/section4.jpg'
import section5 from '../../asset/section/title30/section5.jpg'
import section6 from '../../asset/section/title30/section6.jpg'
import section7 from '../../asset/section/title30/section7.jpg'
import section8 from '../../asset/section/title30/section8.jpg'
import section9 from '../../asset/section/title30/section9.jpg'
import section10 from '../../asset/section/title30/section10.jpg'
import section11 from '../../asset/section/title30/section11.jpg'
import section12 from '../../asset/section/title30/section12.jpg'
import section13 from '../../asset/section/title30/section13.jpg'
import section14 from '../../asset/section/title30/section14.jpg'
import section15 from '../../asset/section/title30/section15.jpg'
import section16 from '../../asset/section/title30/section16.jpg'
import section17 from '../../asset/section/title30/section17.jpg'
import section18 from '../../asset/section/title30/section18.jpg'
import section19 from '../../asset/section/title30/section19.jpg'
import section20 from '../../asset/section/title30/section20.jpg'
import section21 from '../../asset/section/title30/section21.jpg'
import section22 from '../../asset/section/title30/section22.jpg'
import section23 from '../../asset/section/title30/section23.jpg'
import section24 from '../../asset/section/title30/section24.jpg'
import section25 from '../../asset/section/title30/section25.jpg'
import section26 from '../../asset/section/title30/section26.jpg'
import section27 from '../../asset/section/title30/section27.jpg'
import section28 from '../../asset/section/title30/section28.jpg'
import section29 from '../../asset/section/title30/section29.jpg'
import section30 from '../../asset/section/title30/section30.jpg'
import section31 from '../../asset/section/title30/section31.jpg'

import {useLocation, useNavigate} from "react-router-dom";

const CoverageAccident = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (previous: number, next: number) => {
        setCurrentIndex(next);
    }

    const imageArray = [
        section1, section2, section3, section4, section5, section6, section7, section8, section9, section10,
        section11, section12, section13, section14, section15, section16, section17, section18, section19, section20,
        section21, section22, section23, section24, section25, section26, section27, section28, section29, section30,
        section31,
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

    return (
        <div style={{
            backgroundImage: `url('${imageArray[currentIndex]}')`,
            width: '100%', height: '100vh', cursor: 'pointer',
            backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        }}>
            <Fade
                duration={1500} transitionDuration={500} pauseOnHover={false}
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

export default CoverageAccident;
