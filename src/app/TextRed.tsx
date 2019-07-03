import React, {FC} from 'react';

import useStore from './ContextStore';

interface Props {
	label: string;
}

const TextRed: FC<Readonly<Props>> = p => {
	const [store] = useStore();

	return (
		<div>
			<span>{p.label}: </span>
			<span style={{color: 'red'}}>{store.city}</span>
		</div>
	);
};

export default TextRed;
