import React, {FC} from 'react';

import useStore from './ContextStore';

interface Props { }

const RedText: FC<Props> = () => {
	const [store, setStore] = useStore();

	return (
		<div style={{color: 'red'}}>{store.city}</div>
	);
};

export default RedText;
