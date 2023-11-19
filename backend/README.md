# MERN Stack TODO Application

<!-- INSTALL PROJECT PACKAGES -->

## Author Details:

- Author: Tanmay Panda
- PRN: 1032210652
- Panel: B
- Roll Number: 18
- Batch: B1

## API Documentation

```sh
|---------------------------------------------------------------------------------|
| METHOD:  URL:                                        // DESCRIPTION             |
|---------------------------------------------------------------------------------|
| GET:     http:localhost:5000/                        // defaults welcome routes |
| GET:     http:localhost:5000/api/v1/todos-all        // get all todos           |
| GET:     http:localhost:5000/api/v1/todo/:id         // get a single todo       |
| POST:    http:localhost:5000/api/v1/todo/new         // create a new todo       |
| POST:    http:localhost:5000/api/v1/todos-many       // create many todos       |
| PUT:     http:localhost:5000/api/v1/todo/:id         // update a todo           |
| DELETE:  http:localhost:5000/api/v1/todo/:id         // delete a todo           |
|---------------------------------------------------------------------------------|
```

<!-- INSTALL PROJECT PACKAGES -->

## Installing Packages

```sh
npm install express         // node framework
npm install serve-favicon   // api router favicon sets
npm install mongoose        // mongoDB database schema-based solution to model your application data
npm install dotenv          // environment variables
npm install cors           // cors-origin-allow-all
```

### Install Dev Dependencies

```sh
npm install -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
npm install -D eslint-config-prettier eslint-plugin-prettier
```
