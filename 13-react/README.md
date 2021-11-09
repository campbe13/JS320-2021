React
First make certain you have completed the CI/CD lab from last week.

* Convert the x app into a React app 
  * take a copy of the original code from here week 9 TS example
* First convert only the html into a React component with only the render() method & JSX and add an explicit ReactDOM.render() for it.  
  * You will have to explictily re-render when you get new data.
  * Note: you can omit the image for speed sake
  * Remember: you cannot use setup() + DOMContentLoaded with React & Babel, Babel consumes the event
  * Note: the rest of the code should work the same way, make sure it works before continuing.
* Finaly gradually convert the rest so that you have one component that uses state so ReactDOM.render() once.

This is what I did in my examples, you can use them & the slides to help you:
* Step 1 [sunrise example 1](sunrise-example-explicit) uses an explicit re-render every time, inefficient
* Step 2 [sunrise example 2](sunrise-example-react) uses state to have React re-render when state changes
