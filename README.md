# React TypeScript Context Example

A short React example of how to use [Context](https://reactjs.org/docs/context.html) with [useState hook](https://reactjs.org/docs/hooks-overview.html#state-hook) for app state management. This project is written in TypeScript, based on [create-react-app](https://github.com/facebook/create-react-app) tool.

It follows [TS cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) guidelines.

## What it does

This project is minimal, the step by step goes like this:

* Fields and default values of context data are defined in [MyContext.tsx](src/app/MyContext.tsx?ts=4).

* App is wrapped in our `MyContextProvider` in [App.tsx](src/app/App.tsx?ts=4).

* Context data is modified in [Inputs.tsx](src/app/Inputs.tsx?ts=4) with get/set tuple returned from `useMyContext`.

* Store data is displayed in [TextBlue.tsx](src/app/TextBlue.tsx?ts=4) and [TextRed.tsx](src/app/TextRed.tsx?ts=4) with data returned from `useMyContext`.

## How to use in your project

Create your project normally:

    create-react-app myproject --template typescript

Then just copy [MyContext.tsx](src/app/MyContext.tsx?ts=4) into your project and modify the `initialState` object to suit your needs.