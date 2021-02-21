import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CursorDiv = styled.div`
	width: 20px;
	height: 20px;
	border: 1px solid white;
	border-radius: 50%;
	position: absolute;
	pointer-events: none;
	&::after {
		content: '';
		width: 20px;
		height: 20px;
		position: absolute;
		border: 2px solid blue;
		border-radius: 50%;
		opacity: 0.5;
		top: -8px;
		left: -8px;
	}
	@keyframes cursorAnim {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(5);
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
	.expand {
		animation: cursorAnim 0.5s forwards;
	}
`;
const Cursor = () => {
	const cursorRef = useRef(null);
	useEffect(() => {
		if (cursorRef.current == null || cursorRef == null) return;
		document.addEventListener('mousemove', (e) => {
			if (cursorRef.current == null) return;
			cursorRef.current.setAttribute(
				'style',
				'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;'
			);
		});
		document.addEventListener('click', () => {
			if (cursorRef.current == null) return;
			cursorRef.current.classList.add('expand');
			setTimeout(() => {
				if (cursorRef.current == null) return;
				cursorRef.current.classList.remove('expand');
			}, 500);
		});
	}, []);
	return <CursorDiv></CursorDiv>;
};
export default Cursor;
