import React from 'react';

import {useMyContext} from './MyContext';

/**
 * Changes values of the store.
 */
const Inputs = () => {
	const [store, setStore] = useMyContext();

	return (
		<div>
			<div>
				Name
				<input type="text" autoComplete="off" value={store.name}
					onChange={e => setStore({name: e.target.value})} />
			</div>

			<div>
				City
				<input type="text" autoComplete="off" value={store.city}
					onChange={e => setStore({city: e.target.value})} />
			</div>
		</div>
	);
};

export default Inputs;
