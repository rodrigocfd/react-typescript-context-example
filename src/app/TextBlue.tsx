import React, {FC} from 'react';

import useStore from './ContextStore';

const TextBlue: FC = () => {
	const [store] = useStore();

	return (
		<div style={{color: 'blue'}}>{store.name}</div>
	);
};

export default TextBlue;
