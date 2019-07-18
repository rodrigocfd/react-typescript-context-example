import React, {FC} from 'react';

import useMyStore from './MyStore';

interface Props {
	label: string;
}

/**
 * Displays text from the store.
 */
const TextRed: FC<Readonly<Props>> = p => {
	const [store] = useMyStore();

	return (
		<div>
			<span>{p.label}: </span>
			<span style={{color: 'red'}}>{store.city}</span>
		</div>
	);
};

export default TextRed;
