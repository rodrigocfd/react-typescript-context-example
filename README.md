# React TypeScript Context Example

A short React example of how to use [Context](https://reactjs.org/docs/context.html) with [useState hook](https://reactjs.org/docs/hooks-overview.html#state-hook) and TypeScript, based on [create-react-app](https://github.com/facebook/create-react-app) tool.

What it does:

* Fields and default values of store are defined in [ContextStore.ts](src/app/ContextStore.ts?ts=4).

* A new store is created in [App.tsx](src/app/App.tsx?ts=4) with `newStore`, which also encapsulates an useState call.

* Store is modified in [Inputs.tsx](src/app/Inputs.tsx?ts=4) with get/set tuple returned from `useStore`.

* Store content is displayed in [TextBlue.tsx](src/app/TextBlue.tsx?ts=4) and [TextRed.tsx](src/app/TextRed.tsx?ts=4) with store returned from `useStore`.
