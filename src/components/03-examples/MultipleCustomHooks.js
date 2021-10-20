import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './style.css';

export const MultipleCustomHooks = () => {
	const { state: counter, increment } = useCounter(1);

	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	//console.log(state);
	const { author, quote } = !!data && data[0];

	return (
		<div>
			<h1>BeakingBad Quotes</h1>

			{loading ? (
				<div className="alert alert-info text-center">loading...</div>
			) : (
				<blockquote className="blockquote text-end">
					<p>{quote}</p>
					<figcaption className="blockquote-footer">{author}</figcaption>
				</blockquote>
			)}

			<button className="btn btn-primary" onClick={() => increment(1)}>
				Siguiente quote
			</button>
		</div>
	);
};
