import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

// Import the routes
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// done: Serve static files of entire client dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// done: Implement middleware for parsing JSON and urlencoded form data


// Middleware for parsing URL-encoded form data



// done: Implement middleware to connect the routes


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
