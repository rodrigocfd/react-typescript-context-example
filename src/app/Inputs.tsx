import React, {FC} from 'react';

import useStore from './ContextStore';

const Inputs: FC = () => {
	const [store, setStore] = useStore();

	return (
		<div>
			<div>
				Name {' '}
				<input type="text" autoComplete="off" value={store.name}
					onChange={e => setStore({name: e.target.value})} />
			</div>

			<div>
				City {' '}
				<input type="text" autoComplete="off" value={store.city}
					onChange={e => setStore({city: e.target.value})} />
			</div>
		</div>
	);
};

export default Inputs;
