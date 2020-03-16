import React from 'react';

import {useMyContext} from './MyContext';

// Displays text from the store.
function TextBlue() {
	const [store] = useMyContext();

	return (
		<div style={{color: 'blue'}}>{store.name}</div>
	);
}

export default TextBlue;
