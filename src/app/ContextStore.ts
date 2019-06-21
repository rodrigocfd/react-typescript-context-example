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
export type StoreGetSet = [Store, (s: Store) => void];

/**
 * Creates a new store with default values.
 * Return value can be passed to ContextStore.Provider.
 */
export function newStore(): StoreGetSet {
	return React.useState({
		name: 'foo',
		city: 'Brasília'
	});
};

/**
 * Context object, to be passed to useContext hook.
 */
export const ContextStore = React.createContext(
	<StoreGetSet>[<Store>{}, (s: Store): void => {}]);

/**
 * Syntactic sugar to useContext hook.
 */
export default function useStore(): StoreGetSet {
	return React.useContext(ContextStore);
};
