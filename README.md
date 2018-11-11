## React Element

An element is a plain object describing a component instance or DOM node and its desired properties.
React element is an object representation of a DOM node. React element isn’t actually the thing that we see on screen,
instead, it’s just an object representation of it.

To create React element, we can use React’s createElement method.

```
const element = React.createElement("h1", { id: "header" }, "Hello World");
```

createElement method takes 3 arguments:

- The first is a tag name string (div, span, h1, p, etc) or a React component type (a class or a function), or a React fragment type.
- the second is any attributes you want the element to have (props)
- the third is contents or the children of the element (children). in this case the text "Hello World".

ThecreateElement invocation above is going to return an object with this shape :

```
{
  type: 'h1',
  props: {
    children: 'Hello World',
    id: 'header'
  }
}
```

and when it’s rendered to the DOM using ReactDOM.render() and produces DOM node that looks like :

```
<h1 id='header'>Hello World</h1>
```

## What Next

JSX
