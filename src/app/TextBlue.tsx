import React, {FC} from 'react';

import useStore from './ContextStore';

interface Props { }

const TextBlue: FC<Props> = () => {
	const [store, setStore] = useStore();

	return (
		<div style={{color: 'blue'}}>{store.name}</div>
	);
};

export default TextBlue;
