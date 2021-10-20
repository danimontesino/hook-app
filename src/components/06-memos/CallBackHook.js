import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import './style.css';

export const CallBackHook = () => {
	const [counter, setCounter] = useState(5);

	/* const increment = () => {
		setCounter(counter + 1);
	}; */

	const increment = useCallback(
		num => {
			setCounter(c => c + num);
		},
		[setCounter]
	);

	/* useEffect(() => {
		/// también se utiliza el useCallBack con useEffect, cuando la dependencia es una función
	}, [increment]); */

	return (
		<div>
			<h1>useCallback Hook: {counter}</h1>

			<ShowIncrement increment={increment} />
		</div>
	);
};
