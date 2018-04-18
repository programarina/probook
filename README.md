# ProBook
## Just Web UI #

* [Setup](#setup-the-development-environment)
* [Workflow](#workflow)

### Setup the development environment

#### Running Locally

Run `git clone ` to clone the root repository.

Ensure that you have node.js and NPM installed. If not, you can download them as a package from [nodejs.org](https://nodejs.org/). The build environment for this project uses Node 9.4.0 and NPM version 5.6.0. 

To run the app, first run `npm install` to resolve npm dependencies.

Then run `npm start`, which will start a webpack dev server on local port http://localhost:8080/.

#### Using API

The API façade and platforms on which the UI application depends are setup to run on local mock api. It supports GET, PUT, POST, and DELETE requests against the mock API and note that changes are saved to db/db.json.

##### Getting Started

To run these containers for local development you will need to run `git clone` to clone the server [https://github.com/typicode/json-serverhttps://docs.docker.com/mac/)].

To run server, first run `npm install`, then `npm start`, it is set to run on local port http://localhost:3333/

##### Endpoints

Application endpoints based on db/db.js objects and support REST standards. Meaning you can use GET, PUT, POST, and DELETE requests against all provided endpoints.
Provided endpoints are:

* GET http://localhost:3333/api/users
* GET http://localhost:3333/api/notes
* GET http://localhost:3333/api/notes/id
* POST http://localhost:3333/api/notes
* PUT http://localhost:3333/api/notes/id
* DELETE http://localhost:3333/api/notes/id







