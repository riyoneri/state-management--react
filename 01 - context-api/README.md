# Context API

## Overview

The Context API is a built-in state management tool in React. It allows data to be passed top-down (parent to child) via context rather than props. This makes it easier to share values between components without having to explicitly pass a prop through every level of the tree.

## When to Use

Context API is perfect for sharing small bits of information between components. It's not designed to be a complete application data store. It's designed to share data that can be considered "global" for a tree of React components.

## Basic Usage

Here's a basic example of how you can use the Context API:

```jsx
// Create a Context
const MyContext = React.createContext(defaultValue);

// Provide a context value
<MyContext.Provider value={/* some value */}>
</MyContext.Provider>

// Consume the context value
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
