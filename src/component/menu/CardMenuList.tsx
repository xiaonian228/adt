import React, {useEffect, useRef, useState} from 'react';
import SelectMenu from "./SelectMenu";

const CardMenuList = ({ title }:{title:string}) => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const [fontSize, setFontSize] = useState<string>('2.8125vw');

    useEffect(() => {
        const adjustFontSize = () => {
            const element = textRef.current;
            if (element) {
                const containerWidth = element.clientWidth;
                const textWidth = element.scrollWidth;

                // If textWidth is greater than containerWidth, reduce fontSize
                if (textWidth > containerWidth) {
                    setFontSize((prevSize) => {
                        let newSize = parseFloat(prevSize) - 0.15; // Reduce fontSize by 0.1vw
                        if (newSize < 1) newSize = 1; // Set a minimum fontSize
                        return `${newSize}vw`;
                    });
                }
            }
        };

        adjustFontSize(); // Initial adjustment

        const resizeObserver = new ResizeObserver(adjustFontSize);
        if (textRef.current) {
            resizeObserver.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                resizeObserver.unobserve(textRef.current);
            }
        };
    }, [title]);
    return (
        <div
            ref={textRef}
            style={{
                transition:'fontSize 0.2s',
                width: 'auto',
                height: '3.75vw',
                fontSize: fontSize,
                fontWeight: 700,
                color: '#001f77',
                borderRadius: '1.5vw',
                backgroundColor: '#b2b8e8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden', // Hide overflow if text is too large
                whiteSpace: 'nowrap', // Prevent text from wrapping
            }}
        >
            {title}
        </div>
    );
};

export default CardMenuList;