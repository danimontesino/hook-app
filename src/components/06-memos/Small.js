import React, { memo } from 'react';

export const Small = memo(({ value }) => {
	console.log('LLamando componente Small');

	return <small>{value}</small>;
});
