import React from 'react';

import {MyContextProvider} from './MyContext';
import Inputs from './Inputs';
import TextBlue from './TextBlue';
import TextRed from './TextRed';

/**
 * Application root component.
 */
const App = () => (
	<MyContextProvider>
		<div>
			<Inputs />
			<hr />
			<TextBlue />
			<TextRed label="City" />
		</div>
	</MyContextProvider>
);

export default App;
