function App() {
  let text = "Hello World!";
  return (
    <>
      <h1 className="hello">Hello</h1>
      <h1>Welcome to React!</h1>
      <label htmlFor="username">Username:</label>
      <p>{text}</p>
      <input type="text" />
    </>
  );
}

export default App;

// JSX => JavaScript XML
// It is a syntax extension for JavaScript
// It allows us to write HTML-like code within JavaScript
// Babel is used to transpile JSX into regular JavaScript

// rules for writing JSX
// 1. JSX must have a single parent element
// 2. Use className instead of class
// 3. Use camelCase for event handlers
// 4. JSX expressions must be wrapped in curly braces {}
// 5. Self-closing tags must end with a slash />
