import React, {FC} from 'react';

import {MyStoreContext, newMyStore} from './MyStore';
import Inputs from './Inputs';
import TextBlue from './TextBlue';
import TextRed from './TextRed';

/**
 * Application root component.
 */
const App: FC = () => {
	return (
		<MyStoreContext.Provider value={newMyStore()}>
			<div>
				<Inputs />
				<hr />
				<TextBlue />
				<TextRed label="City" />
			</div>
		</MyStoreContext.Provider>
	);
};

export default App;
