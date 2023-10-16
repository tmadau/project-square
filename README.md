# Full Stack Single Page Website

In order to run this project you have to run both the back and frontend servers:

### `Backend`

Backend created using NodeJS and Express

### `npm run dev`

#### `cd backend/`

cd into `frontend` folder from the root directory of the repo

#### `creat env file:`

create `.env` file and store: `MONGODB_URL` and `PORT` variables

#### `steps on how to setup mongo for free`

Click here -> [setup](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)

#### `server link:`

What you choose as your `PORT` will determine the server link, I had mine set at `8080`

#### `npm install`

Run `npm install` inside the backend folder in order to install all the packages

#### npm run dev

Run `npm run dev` To run the backend server, which will be served on: `http://localhost:8080` or `http://localhost:<What-ever-port-stored-on-env>`

### API structure:

#### `POST:`

`http://localhost:8080/featured-brands` to upload images to the server with publish date

#### `GET:`

`http://localhost:8080/featured-brands` to get brands filtered by date published

#### `DELETE:`

`http://localhost:8080/featured-brands/:id` to delete brands stored on server

### `Frontend`

Front end is in reactjs

#### `cd frontend/`

cd into `frontend` folder from the root directory of the repo

#### `npm start`

Run npm start to run the server which is on :[http://localhost:3000](http://localhost:3000) to view it in your browser.
