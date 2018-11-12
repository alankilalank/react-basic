## React Components

Components are the building blocks of React elements. we can think of a component is a collection of HTML, CSS, JS, and some internal data (state|props) specific to that component.

A component is a function or a Class which optionally accepts input and returns a React element.

There are 2 ways to create components :

** Function Component **

The simplest version of React component is a plain JavaScript function that returns a React element.
They're commonly called "stateles function components" or just "functional components"

```
function World() {
  return <span>World</span>;
}
```

notice that `<span>World</span>` looks like HTML but it's not. it's not string either. It's called JSX.
The JSX elements are actually compiled down to Javascript. The code above after transformed

```
function World() {
  return React.createElement("span", null, "World");
}
```

** Class Component **

Components can also created with ES6 classes :

```
class Hello extends Component {
  render() {
    return <span>Hellow</span>;
  }
}
```

Class component is a little bit more powerful than a function component.
It can store local state and perform custom logic inside it.

A function component is less powerful but is simpler, and function component acts like a class component
with just a single render() method.

However, whether functions or classes, fundamentally they are all components to React. They take the props as their input, and return the elements as their output.

Components also could be combine or nested between Class component and function, this become common ways to composing component in React.

```
class HelloWorld extends Component {
  render() {
    return (
      <div className="container">
        <Hello /> <World />
      </div>
    );
  }
}
```

## Learn More

- [React Components, elements, and Instance](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)
- [Components](https://reactjs.org/docs/glossary.html#components)
