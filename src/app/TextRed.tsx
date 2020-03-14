import React from 'react';

import useMyStore from './MyStore';

type Props = {
	label: string
};

/**
 * Displays text from the store.
 */
const TextRed = (p: Props) => {
	const [store] = useMyStore();

	return (
		<div>
			<span>{p.label}: </span>
			<span style={{color: 'red'}}>{store.city}</span>
		</div>
	);
};

export default TextRed;
