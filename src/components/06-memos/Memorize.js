import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './style.css';

export const Memorize = () => {
	const [show, setShow] = useState(true);
	const { state: counter, increment } = useCounter(10);

	return (
		<div>
			<h1>
				Counter: <Small value={counter} />
			</h1>

			<button className="btn btn-primary" onClick={() => increment(1)}>
				+1
			</button>
			<button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
