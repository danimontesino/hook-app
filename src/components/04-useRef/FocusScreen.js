import React, { useRef } from 'react';
import './style.css';

export const FocusScreen = () => {
	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.select();
	};

	return (
		<div>
			<h1>FocusScreen</h1>

			<input ref={inputRef} className="form-control mt-4" placeholder="Su nombre" />

			<button className="btn btn-outline-primary mt-4" onClick={handleClick}>
				Focus
			</button>
		</div>
	);
};
