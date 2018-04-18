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

### Workflow ###
#### NPM Scripts
##### lint - Test scripts for code consistency. Run by default on a git commit hook.

#### Tools and Practices
##### [React](https://facebook.github.io/react/docs/hello-world.html)

I use React for developing both my stateful parent components (usually at the `views` layer) and my stateless UI components (usually at the `components` layer).

##### [Redux](http://redux.js.org/)

I use Redux for state management, which stores application state in a single immutable state atom updated through actions that are dispatched to the Redux "store".

##### [Webpack](https://webpack.github.io/)

Webpack is the technology I use to transform and build my code into optimized code bundles executable by the browser. 

##### ES2015

This project follows [ECMAScript 2015](https://github.com/lukehoban/es6features) syntax using the [Babel](https://babeljs.io/) transpiler.

##### Pre-commit Git Hooks

Upon attempting to commit,  the linter will execute. If it fails, fix all errors before you commit. Read the linter-specific documentation for instructions or rule clarification.
### Git Workflow 

##### Branches

`master` - The branch holding the latest working copy of the project, the “head” of the trunk

`feature branches` - The branches containing granular work.

##### Commit Messages

Commit messages should be formatted like so: One sentence description of the work starting with a verb.



