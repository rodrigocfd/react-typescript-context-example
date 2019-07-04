import React, {FC} from 'react';

import {ContextStore, newStore} from './ContextStore';
import Inputs from './Inputs';
import TextBlue from './TextBlue';
import TextRed from './TextRed';

/**
 * Application root component.
 */
const App: FC = () => {
	return (
		<ContextStore.Provider value={newStore()}>
			<div>
				<Inputs />
				<hr />
				<TextBlue />
				<TextRed label="City" />
			</div>
		</ContextStore.Provider>
	);
};

export default App;
