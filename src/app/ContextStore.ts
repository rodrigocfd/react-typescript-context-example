import React from 'react';

/**
 * Global app context store.
 */
export interface Store {
	name: string;
	city: string;
};

/**
 * Tuple returned by useContext hook.
 */
type SetStoreFunc = (s: Store) => void;
export type ContextGetSetTuple = [Store, SetStoreFunc];

/**
 * Creates a new store with default values.
 * Return value can be passed to ContextStore.Provider.
 */
export function newStore(): ContextGetSetTuple {
	return React.useState({
		name: 'foo',
		city: 'Brasília'
	});
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

export default function useStore(): [Store, SetPartialStoreFunc] {
	const [store, setStore] = React.useContext(ContextStore);
	function setPartialStore(p: Partial<Store>) {
		setStore({...store, ...p});
	}
	return [store, setPartialStore];
};
