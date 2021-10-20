import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import './style.css';

export const MemoHook = () => {
	const [show, setShow] = useState(true);
	const { state: counter, increment } = useCounter(20);

	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

	return (
		<div>
			<h1>MemoHook</h1>
			<h3>
				Counter: <small>{counter}</small>
			</h3>

			<p>{memoProcesoPesado}</p>

			<button className="btn btn-primary" onClick={() => increment(1)}>
				+1
			</button>
			<button className="btn btn-outline-primary mx-3" onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
