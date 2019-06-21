import React, {FC} from 'react';

import useStore from './ContextStore';

interface Props {
	label: string;
}

const RedText: FC<Props> = (p) => {
	const [store, setStore] = useStore();

	return (
		<div>
			<span>{p.label}: </span>
			<span style={{color: 'red'}}>{store.city}</span>
		</div>
	);
};

export default RedText;
