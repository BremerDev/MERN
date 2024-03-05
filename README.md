# MERN
MERN Stack Application (ToDo)

Front End = React

Back End = Server / Database

Express Framework Web Server
Database MongoDB (non relational db)
Nodejs Runs inside of Server. 
Serverside javascript run time outside of browser.

Allows Developers to know just JavaScript. Everything is written in JavaScript in the MERN Stack.

Setup Front End for React:
 npx create-react-app todos-front-end --use-npm

To Start:
npm run start

Delete App.js boilerplates and delete logo.svg.

Setup Back End:
Create Separate Directory for Backend.

npm init -y 

creates josn file

Install Backend Dependancies:
npm install express mongodb

Setup Server:
mkdir src -> server.js
setup endpoints (CRUD) here.

Start Server:
node server.js

See Backend get at http://localhost:8080/test for to test.

Start Creating Components... Build the app!

Install axios dependancies:

npm install exios

then import to app.js which eases burden of sending requests and responses to and from server.

Add proxy to package.json to localhost:8080 to avoid console errors.

Install UUID package:
npm install uuid

this is used for generating random id's with very low collision probability.