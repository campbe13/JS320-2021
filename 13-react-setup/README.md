# Setup a React project (using create-react-app)

It is possible to set up a React project by installing Node.js & create-react-app.  The other install option is using webpack and babel.

You can do this in the lab, node.js is installed but you cannot use the H: drive for your destination, it will give you errors

Step 1 - use create-react-app

Open a command prompt and cd to a user directory.  (If you are in the lab, you cannot use `H:`)

```
C:\Users\youruserid> cd C:\Users\youruserid\Documents\JS\
C:\Users\youruserid\Documents\JS\> npx create-react-app my-app
```
This will create a folder named my-app on the desktop and install all the required files in it.

Step 2 -  look around

```
C:\Users\youruserid\Documents\JS\> cd my-app/
C:\Users\youruserid\Documents\JS\my-app\> dir 
C:\Users\youruserid\Documents\JS\my-app\> dir src
```
Step 3 - launch it 
Run the project using the start command.  It should open a browser where you will see it via localhost:3000 
```
C:\Users\youruserid\Documents\JS\my-app\> npm start
```
![image](https://user-images.githubusercontent.com/1751207/141199339-94c3c29a-7f4f-41c3-a3c6-eb197c752834.png)

Note: if you are running in the lab you must backup your data to keep it, the C: drive will be wiped on reboot.
