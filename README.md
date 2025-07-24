* create seperate folder for server.
* create package.json file using the command 'npm init -y'
* Then install the packages (cors, express, mongoose, dotenv)
  commands
  npm i cors
  npm i express
  npm i mongoose
  npm i dotenv
* Then create gitignore file to hold the names of the files that need to be ignore while pushing into git.
* Then create index.js file, router.js file, .env file, connection.js file.
* After that create server in index.js file and then make that server listen to the server port.
* Then create new project in mongodb and setup mongodb cluster and set connectionstring in .env file .
* Then after that connect that connectionstring in connection.js file.
* After that the folder named model and contoller was created.
* Inside model folder a file named taskModel.js was created and create model in it.
* Inside controller folder a file named taskController.js was created for create controllers for add task , get task and delete task.
* inside router.js file set path to resolve request.
