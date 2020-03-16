import React from 'react';

import {useMyContext} from './MyContext';

type Props = {
	label: string
};

/**
 * Displays text from the store.
 */
const TextRed = (p: Props) => {
	const [store] = useMyContext();

	return (
		<div>
			<span>{p.label}: </span>
			<span style={{color: 'red'}}>{store.city}</span>
		</div>
	);
};

export default TextRed;
