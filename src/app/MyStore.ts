import React from 'react';

/**
 * Defines the structure of global context store, and default values.
 * If you're using a non-built-in type, use "as" to declare the type.
 * This structure is the *ONLY THING* you need to customize in this
 * file, everything else will adapt accordingly.
 */
function createMyStore() {
	return {
		name: '', //as string,
		city: '' //as string
	};
}

export interface MyStore
	extends ReturnType<typeof createMyStore> { };

/**
 * Tuple returned by useContext hook.
 */
type SetMyStoreFunc = (s: MyStore) => void;
export type GetSetTuple = [Readonly<MyStore>, SetMyStoreFunc];

/**
 * Creates a new store with default values and pushes it onto useState hook
 * of current component; intended to be used at your root component.
 * Return value can be passed to ContextStore.Provider.
 */
export function newMyStore(): GetSetTuple {
	return React.useState(createMyStore());
};

/**
 * Context object, to be passed to useContext hook.
 */
export const MyStoreContext = React.createContext(
	[{} as MyStore, (s: MyStore): void => {}] as GetSetTuple);

/**
 * Syntactic sugar to useContext hook, with partial setStore function.
 */
type SetPartialMyStoreFunc = (p: Partial<MyStore>) => void;

export default function useMyStore(): [Readonly<MyStore>, SetPartialMyStoreFunc] {
	const [store, setStore] = React.useContext(MyStoreContext);
	function setPartialStore(p: Partial<MyStore>) {
		setStore({...store, ...p});
	}
	return [store, setPartialStore];
};
