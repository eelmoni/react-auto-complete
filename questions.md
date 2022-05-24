# Questions

1. What is the difference between Component and PureComponent? give an example where it might break my app.

```
React.PureComponent implements shouldComponentUpdate (built-in) by doing a shallow comparison of the props and state; instead, React.Component does not implement shouldComponentUpdate, i.e. it doesn’t make the shallow comparison.

A PureComponent could break my app when there is a complex structure of the props/state, since it makes the comparison shallowly.
```


2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

```
Honestly, I don’t know, I can think of the following: since Context is used to update values that are shared by many components in the tree, it might be that some of the PureComponent does not allow that update. Then,  it could cause some PureComponent does not receive the Context value update. I didn’t come across this situation though, so I'm not sure.
```

3. Describe 3 ways to pass information from a component to its PARENT.

```
- Create a callback in the parent and pass it to the child component, then child component can call this callback with the information needed by the parent.
- Using a Redux implementation, the child component can dispatch an action to update some data in the redux store. Then, the parent listens for changes on the same piece of the store.
- By using a publish/subscribe pattern, parent can subscribe to a channel in which the child component will publish an event with the information needed.

```

4. Give 2 ways to prevent components from re-rendering.

```
- implement shouldComponentUpdate
- use React.memo function
```

5. What is a fragment and why do we need it? Give an example where it might break my app.

```
React Fragments can be used to render a group of elements without creating a new node in the tree. I think it could break the styling, for instance if I replace a div by a fragment.
```

6. Give 3 examples of the HOC pattern.

```
- The `connect` method of the Redux library is a HOC. It allows connecting a visual component with the redux store.
- In a previous project, I created a component which encapsulated the logic involved during an API call, it contained: `error`, `loading` and `success data` states. We used that HOC in every component that needs to call an API endpoint.
- I remember another example in which I implemented common animations in a HOC, so we can reuse it in multiple visual components.
```

7. what's the difference in handling exceptions in promises, callbacks and async...await.

```
In promises, we need to use `.catch((error) => {})` method in order to handle an error, in async/await we need to use a `try catch` block statement in order to handle the error. I’m not sure about callbacks, could it be an old implementation? not sure.
```

8. How many arguments does setState take and why is it async.

```
It has two arguments: first one is an updated object which will be the new state or a function used for the same goal; second one is a function which will be executed after state is updated. It can’t be sync because is an expensive operation, it could block the JS execution.
```

9. List the steps needed to migrate a Class to Function Component.

```
- remove class statement and create a function instead.
- redefine all methods by using useCallback / useMemo hooks.
- transform class life cycle methods by using useEffect hook.
```

10. List a few ways styles can be used with components.

```
inline styles, set className prop, by using “styled component”
```

11. How to render an HTML string coming from the server.

```
using dangerouslySetInnerHTML prop
```
