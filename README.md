# Full Stack Single Page Website

In order to run this project you have to run both the back and frontend servers:

### `Backend`

Backend created using NodeJS and Express

### `npm run dev`

cd into backend folder: `cd backend/`
create `.env` file and store: `MONGODB_URL` and `PORT` variables.
On MONGODB_URL store mongodb `URL`: `https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database`
What you choose as your `PORT` will determine the server link, I had mine set at `8080`
And then `npm install` inside the backend folder in order to install all the packages
Then `npm run dev` to run the backend server, which will be served on: `http://localhost:8080` or `http://localhost:<What-ever-port-stored-on-env>`

**API structure**
POST `http://localhost:8080/featured-brands` to upload images to the server with publish date
GET `http://localhost:8080/featured-brands` to get brands filtered by date published
GET `http://localhost:8080/featured-brands/:id` to delete brands stored on server

### `Frontend`

Front end is in reactjs

### `npm start`

cd into front folder from the root directory of the repo `cd frontend`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
