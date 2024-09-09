import React, {useEffect, useState} from 'react';
import {Fade} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import section1 from '../../asset/section/title11/section1.jpg'
import section2 from '../../asset/section/title11/section2.jpg'
import section3 from '../../asset/section/title11/section3.jpg'
import section4 from '../../asset/section/title11/section4.jpg'
import section5 from '../../asset/section/title11/section5.jpg'
import section6 from '../../asset/section/title11/section6.jpg'
import section7 from '../../asset/section/title11/section7.jpg'
import section8 from '../../asset/section/title11/section8.jpg'
import section9 from '../../asset/section/title11/section9.jpg'
import section10 from '../../asset/section/title11/section10.jpg'
import section11 from '../../asset/section/title11/section11.jpg'
import section12 from '../../asset/section/title11/section12.jpg'
import section13 from '../../asset/section/title11/section13.jpg'
import section14 from '../../asset/section/title11/section14.jpg'
import section15 from '../../asset/section/title11/section15.jpg'
import section16 from '../../asset/section/title11/section16.jpg'
import section17 from '../../asset/section/title11/section17.jpg'
import section18 from '../../asset/section/title11/section18.jpg'
import section19 from '../../asset/section/title11/section19.jpg'
import section20 from '../../asset/section/title11/section20.jpg'
import section21 from '../../asset/section/title11/section21.jpg'
import section22 from '../../asset/section/title11/section22.jpg'
import section23 from '../../asset/section/title11/section23.jpg'
import section24 from '../../asset/section/title11/section24.jpg'
import section25 from '../../asset/section/title11/section25.jpg'
import section26 from '../../asset/section/title11/section26.jpg'
import section27 from '../../asset/section/title11/section27.jpg'
import section28 from '../../asset/section/title11/section28.jpg'
import section29 from '../../asset/section/title11/section29.jpg'
import section30 from '../../asset/section/title11/section30.jpg'
import section31 from '../../asset/section/title11/section31.jpg'
import section32 from '../../asset/section/title11/section32.jpg'
import section33 from '../../asset/section/title11/section33.jpg'
import section34 from '../../asset/section/title11/section34.jpg'
import section35 from '../../asset/section/title11/section35.jpg'
import section36 from '../../asset/section/title11/section36.jpg'
import section37 from '../../asset/section/title11/section37.jpg'
import section38 from '../../asset/section/title11/section38.jpg'
import {useLocation, useNavigate} from "react-router-dom";

const ArticleThirtyFive = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChange = (previous: number, next: number) => {
        setCurrentIndex(next);
    }

    const imageArray = [
        section1, section2, section3, section4, section5, section6, section7, section8, section9, section10,
        section11, section12, section13, section14, section15, section16, section17, section18, section19, section20,
        section21, section22, section23, section24, section25, section26, section27, section28, section29, section30,
        section31, section32, section33, section34, section35, section36, section37, section38,
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

export default ArticleThirtyFive;
