import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './style.css';

export const LayoutEffect = () => {
	const { state: counter, increment } = useCounter(1);

	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	//console.log(state);
	const { author, quote } = !!data && data[0];

	const p = useRef();
	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(p.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>BeakingBad Quotes</h1>

			<blockquote className="blockquote text-end">
				<p ref={p}>{quote}</p>
				<figcaption className="blockquote-footer">{author}</figcaption>
			</blockquote>

			<pre>{JSON.stringify(boxSize, null, 3)}</pre>

			<button className="btn btn-primary" onClick={() => increment(1)}>
				Siguiente quote
			</button>
		</div>
	);
};
