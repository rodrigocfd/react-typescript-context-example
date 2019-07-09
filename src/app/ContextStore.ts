import React from 'react';

/**
 * Defines the structure of global context store, and default values.
 * If you're using a non-built-in type, use "as" to declare the type.
 * This structure is the only thing you need to customize in this file,
 * everything else will adapt according to it.
 */
function createStore() {
	return {
		name: '' as string,
		city: '' as string
	};
}

export interface Store
	extends ReturnType<typeof createStore> { };

/**
 * Tuple returned by useContext hook.
 */
type SetStoreFunc = (s: Store) => void;
export type ContextGetSetTuple = [Readonly<Store>, SetStoreFunc];

/**
 * Creates a new store with default values and pushes it onto useState hook
 * of current component; intended to be used at your root component.
 * Return value can be passed to ContextStore.Provider.
 */
export function newStore(): ContextGetSetTuple {
	return React.useState(createStore());
};

/**
 * Context object, to be passed to useContext hook.
 */
export const ContextStore = React.createContext(
	<ContextGetSetTuple>[<Store>{}, (s: Store): void => {}]);

/**
 * Syntactic sugar to useContext hook, with partial setStore function.
 */
type SetPartialStoreFunc = (p: Partial<Store>) => void;

export default function useStore(): [Readonly<Store>, SetPartialStoreFunc] {
	const [store, setStore] = React.useContext(ContextStore);
	function setPartialStore(p: Partial<Store>) {
		setStore({...store, ...p});
	}
	return [store, setPartialStore];
};
