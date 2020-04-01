# Full stack MERN [Mongodb Express js, React and Nodejs]
We have used react and redux

## What is Redux? 
 Redux is a state management tool. It is a predictable state container for JavaScript applications. 

 Redux ensures that each component of your application can have direct access to the state of the application without having to send props down to child components or using callback functions to send data back up to a parent.


## Redux thunk: 

 By default actions in Redux are dispatched synchronously, which is a problem for any non-trivial app that needs to communicate with an external API or perform side effects. Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

 Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.


## Installation process 
 1. npm init -y
 2. git init
 3. touch server.js
 4. npm i -g create-react-app
 5. create-react-app client
 6. yarn add --dev concurrently
 7. yarn add --dev nodemon
 8. yarn add express morgan body-parser cors mongoose passport passport-jwt
 9. yarn run dev


## Need more tools
yarn add axios redux react-redux react-router-dom redux-thunk


## mongodb install or ubuntu 18.04
1. echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb.list
2. sudo apt update
3. sudo apt install mongodb-org
4. sudo systemctl enable mongod
5. sudo systemctl start mongod 

