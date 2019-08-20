const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const special = require('./routes/api/special');
//body parser middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true})
.then(()=> console.log('MongoDB Connected!'))
.catch(err => console.log(err));

//use routes
app.use('/api/special', special)
const port = process.env.port || 5000;
app.listen(port, ()=> console.log(`Server started on port ${port}`));
// mongoose.connect('mongodb://localhost/TeaSpotsMERN', (err)=>{
//     if (err) throw err;
//     console.log("Successfully connected")
// });
