import React from 'react';

// Defines the structure of global context store, and default values.
// If you're using a non-built-in type, use "as" to declare the type.
// This structure is the *ONLY THING* you need to customize in this file,
// everything else will adapt accordingly.
const initialState = {
	name: '', //as string,
	city: '' //as string
};

// Global app context.
type StateT = typeof initialState;
type StateGetSetT = [StateT, React.Dispatch<React.SetStateAction<StateT>>];

const MyContext = React.createContext<StateGetSetT | undefined>(undefined);

// Context provider, should wrap entire application.
type MyContextProviderProps = {
	children: React.ReactNode
};

function MyContextProvider({children}: MyContextProviderProps) {
	const contextGetSet = React.useState(initialState);
	return (
		<MyContext.Provider value={contextGetSet}>
			{children}
		</MyContext.Provider>
	);
}

// Custom hook to retrieve and set context state.
type SetPartialStateT = (newVals: Partial<StateT>) => void;
type UseMyContextT = [StateT, SetPartialStateT];

function useMyContext(): UseMyContextT {
	const [state, setState] = React.useContext(MyContext) as StateGetSetT;
	function setPartialState(newVals: Partial<StateT>) {
		setState({...state, ...newVals});
	}
	return [state, setPartialState];
}

export {MyContextProvider, useMyContext};
