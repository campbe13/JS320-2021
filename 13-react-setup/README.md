# Setup React (using create-react-app)

TODO change import to script tags ?? / need to explain import ???  screenshots of my own

It is possible to install ReactJS simply by installing create-react-app.  The other option is using webpack and babel.

Step 1 - install create-react-app

Browse through the desktop and install the Create React App using command prompt as shown below −
For the below if you are in the lab, use `H:\JS`
```
C:\Users\youruserid> cd C:\Users\youruserid\Documents\JS\
C:\Users\youruserid\Documents\JS\> npx create-react-app my-app
```

This will create a folder named my-app on the desktop and installs all the required files in it.

Step 2 - Delete all the source files

Browse through the src folder in the generated my-app folder and remove all the files in it as shown below −

```
C:\Users\youruserid\Documents\JS\> cd my-app/src
C:\Users\youruserid\Documents\JS\my-app\src>del *
C:\Users\youruserid\Documents\JS\my-app\src\*, Are you sure (Y/N)? y
```
Step 3 - Add files

Add files with names index.css and index.js in the src folder as −

```
C:\Users\youruserid\Documents\JS\\my-app\src>type nul > index.css
C:\Users\youruserid\Documents\JS\\my-app\src>type nul > index.js
```
In the index.js file add the following code
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```
Step 4 - Run the project
Finally, run the project using the start command.
```
npm start
```
![image](https://user-images.githubusercontent.com/1751207/141159669-24088b78-ef79-4841-9c83-0203e5584255.png)
