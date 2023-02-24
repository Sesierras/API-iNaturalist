const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config(''); // to read the .env file),
const  userRoutes = require("./routes/user");

const app = express();
app.use (morgan (':method :url :status :res[content-length] - :response-time ms'));
const log  = console.log;
const port= process.env.PORT||9100;

/*<<<MiddleWare>>>>*/
app.use(express.json());
app.use('/api', userRoutes);

/*<<<Routes>>>>*/
app.get('/',(req,res) => {  // '/' is the root route, first argument is the route, second argument is the callback function
	res.send('API');
});

/*<<<Connect to MongoDB-Atlas>>>>*/
mongoose.connect(
	process.env.MONGODB_URI)
	.then(() => log('✅ Connected to MongoDB-Atlas'))
	.catch(err=> log(' ❌ Error connecting to MongoDB-Atlas: ', err))


app.listen(port,() => log('Server listen on port',port));