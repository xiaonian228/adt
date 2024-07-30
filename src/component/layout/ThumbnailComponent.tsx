import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { gsap } from 'gsap';
import {horizonThumbnail} from "../../common/thumbnail";
import SafetyEducation from "../imageContainer/SafetyEducation";

const Box = styled.div<{ fullscreen: boolean }>`
    border: 1px solid #000;
    overflow: hidden;
    position: relative;
	background-image: url(${horizonThumbnail[0].image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
    ${({ fullscreen }) =>
	fullscreen &&
	css`
                z-index: 10;
            `}
`;

interface AnimatedComponentProps {
	id: string;
	index: number;
	isActive: boolean;
	style: React.CSSProperties;
}

const ThumbnailComponent: React.FC<AnimatedComponentProps> = ({ id, isActive, style }) => {
	const boxRef = useRef<HTMLDivElement>(null);
	const [fullscreen, setFullscreen] = useState(false);

	useEffect(() => {
		if (isActive) {
			setFullscreen(true);
		}
	}, [isActive]);

	useEffect(() => {
		if (boxRef.current && fullscreen) {
			const tl = gsap.timeline({
				onComplete: () => {
					gsap.delayedCall(3, () => {
						setFullscreen(false);
					});
				}
			});

			tl.to(boxRef.current, {
				scale: 1.05,
				duration: 0.5,
				ease: 'power2.inOut',
			})
				.to(boxRef.current, {
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					scale: 1,
					duration: 0.5,
					ease: 'power2.inOut',
				})
				.to(boxRef.current, {
					delay: 3, // 5초간 풀스크린 상태 유지
				})
				.to(boxRef.current, {
					scale: 1.05,
					duration: 0.5,
					ease: 'power2.inOut',
				})
				.to(boxRef.current, {
					position: 'relative',
					width: '100%',
					height: '100%',
					scale: 1,
					duration: 0.5,
					ease: 'power2.inOut',
				})
				.eventCallback('onComplete', () => {
					setFullscreen(false);
				});
		} else if (boxRef.current && !fullscreen) {
			gsap.to(boxRef.current, {
				position: 'relative',
				width: '100%',
				height: '100%',
				scale: 1,
				duration: 0,
				ease: 'none',
			});
		}
	}, [fullscreen]);

	return (
		<Box ref={boxRef} id={id} fullscreen={fullscreen} style={style}>
			{id}
		</Box>
	);
};

export default ThumbnailComponent;
