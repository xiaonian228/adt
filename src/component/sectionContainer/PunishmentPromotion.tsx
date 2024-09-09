import React, {useEffect, useState} from 'react';
import {Fade} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import section1 from '../../asset/section/title22/section1.jpg'
import section2 from '../../asset/section/title22/section2.jpg'
import section3 from '../../asset/section/title22/section3.jpg'
import section4 from '../../asset/section/title22/section4.jpg'
import section5 from '../../asset/section/title22/section5.jpg'
import section6 from '../../asset/section/title22/section6.jpg'
import section7 from '../../asset/section/title22/section7.jpg'
import section8 from '../../asset/section/title22/section8.jpg'
import section9 from '../../asset/section/title22/section9.jpg'
import section10 from '../../asset/section/title22/section10.jpg'
import section11 from '../../asset/section/title22/section11.jpg'
import section12 from '../../asset/section/title22/section12.jpg'
import section13 from '../../asset/section/title22/section13.jpg'
import section14 from '../../asset/section/title22/section14.jpg'
import section15 from '../../asset/section/title22/section15.jpg'
import section16 from '../../asset/section/title22/section16.jpg'
import section17 from '../../asset/section/title22/section17.jpg'
import section18 from '../../asset/section/title22/section18.jpg'
import section19 from '../../asset/section/title22/section19.jpg'
import section20 from '../../asset/section/title22/section20.jpg'
import section21 from '../../asset/section/title22/section21.jpg'
import section22 from '../../asset/section/title22/section22.jpg'
import section23 from '../../asset/section/title22/section23.jpg'
import section24 from '../../asset/section/title22/section24.jpg'
import section25 from '../../asset/section/title22/section25.jpg'
import section26 from '../../asset/section/title22/section26.jpg'
import section27 from '../../asset/section/title22/section27.jpg'
import section28 from '../../asset/section/title22/section28.jpg'
import section29 from '../../asset/section/title22/section29.jpg'
import section30 from '../../asset/section/title22/section30.jpg'
import section31 from '../../asset/section/title22/section31.jpg'
import section32 from '../../asset/section/title22/section32.jpg'
import section33 from '../../asset/section/title22/section33.jpg'
import section34 from '../../asset/section/title22/section34.jpg'
import section35 from '../../asset/section/title22/section35.jpg'
import section36 from '../../asset/section/title22/section36.jpg'
import section37 from '../../asset/section/title22/section37.jpg'
import section38 from '../../asset/section/title22/section38.jpg'
import section39 from '../../asset/section/title22/section39.jpg'
import section40 from '../../asset/section/title22/section40.jpg'
import section41 from '../../asset/section/title22/section41.jpg'
import section42 from '../../asset/section/title22/section42.jpg'
import section43 from '../../asset/section/title22/section43.jpg'
import section44 from '../../asset/section/title22/section44.jpg'
import section45 from '../../asset/section/title22/section45.jpg'
import section46 from '../../asset/section/title22/section46.jpg'
import section47 from '../../asset/section/title22/section47.jpg'
import section48 from '../../asset/section/title22/section48.jpg'
import section49 from '../../asset/section/title22/section49.jpg'
import section50 from '../../asset/section/title22/section50.jpg'
import {useLocation, useNavigate} from "react-router-dom";

const PunishmentPromotion = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (previous: number, next: number) => {
        setCurrentIndex(next);
    }

    const imageArray = [
        section1, section2, section3, section4, section5, section6, section7, section8, section9, section10,
        section11, section12, section13, section14, section15, section16, section17, section18, section19, section20,
        section21, section22, section23, section24, section25, section26, section27, section28, section29, section30,
        section31, section32, section33, section34, section35, section36, section37, section38, section39, section40,
        section41, section42, section43, section44, section45, section46, section47, section48, section49, section50,
    ]

    const timerControl = [
        4, 2, 2, 2, 3, 3, 3, 4,
        2, 2, 2, 3, 3, 4, 2, 2,
        2, 3, 3, 4, 2, 2, 3, 3,
        4, 2, 2, 2, 1, 3, 2, 1,
        3, 2, 1, 4, 2, 2, 2, 1,
        2, 2, 2, 2, 4, 2, 3, 3,
        3, 4,
    ]
    const transitionControl = [
        500, 500, 500, 500, 2000, 2000, 2000, 2000,
        500, 500, 500, 2000, 2000, 2000, 500, 500,
        500, 2000, 2000, 2000, 500, 500, 2000, 2000,
        2000, 500, 500, 500, 500, 2000, 500, 500,
        2000, 500, 500, 2000, 500, 500, 500, 500,
        1000, 1000, 1000, 1000, 2000, 500, 2000, 2000,
        2000, 2000,
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
                duration={timerControl[currentIndex]*1000} transitionDuration={transitionControl[currentIndex]} pauseOnHover={false}
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

export default PunishmentPromotion;
