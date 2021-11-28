# Convert static HTML to a React component
Your boss wants to reuse the shopping list  as a React component. 
Take a copy of the  the code here [index.html](index.html) you are going to convert it.


Add javascript
1. in the html replace everything in the body with `<div id="here"></div>`
1. edit the empty javascript file to add your code to
    1. define a React component for the shopping list, ex  `class ShoppingList extends React.Component {`
    1. render the component on the here div
    1. once the component renders properly change `Rowlf` from static to being passed in via props, ex `<Shoppinglist name="Rowlf"/>`

[teacher's solution](https://codepen.io/TriciaProf/pen/vYXEvEY)

Once the preceding is working, use the component to render another shopping list
1. create a new div element 
2. add it as a child to the existing div
3. Render a new shopping list on it with your name as the prop

Once the preceding is working, change or duplicate the component add another prop to pass in an array of items to go on the shopping list `shopping=myarray`
items use the component to render another shopping list
1. copy the component `class ShoppingList2 extends React.Component`
2. modify it to use the list
`<ShoppingList name="Gonzo" shopping=['glitter', 'cat food', 'prunes']/>`

[teacher's solution](https://codepen.io/TriciaProf/pen/bGobMwp)
