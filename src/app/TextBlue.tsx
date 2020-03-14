import React from 'react';

import useMyStore from './MyStore';

/**
 * Displays text from the store.
 */
const TextBlue = () => {
	const [store] = useMyStore();

	return (
		<div style={{color: 'blue'}}>{store.name}</div>
	);
};

export default TextBlue;
