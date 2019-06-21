import React, {FC} from 'react';

import useStore from './ContextStore';

interface Props { }

const Inputs: FC<Props> = () => {
	const [store, setStore] = useStore();

	return (
		<div>
			<div>
				Name {' '}
				<input type="text" autoComplete="off" value={store.name}
					onChange={e => setStore({...store, name: e.target.value})} />
			</div>

			<div>
				City {' '}
				<input type="text" autoComplete="off" value={store.city}
					onChange={e => setStore({...store, city: e.target.value})} />
			</div>
		</div>
	);
};

export default Inputs;
