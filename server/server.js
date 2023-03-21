const express = require('express'); //
const cors = require('cors')//
const app = express();//
const port = 8000;
const cookieParser = require('cookie-parser');//

app.use(cookieParser());//
app.use(cors({credentials:true, origin:'http://localhost:3000'}));//
app.use(express.json());//
app.use(express.urlencoded({ extended: true }));//

require('./config/mongoose.config');//
require('dotenv').config(); //

const eventsRoutes = require('./routes/events.routes');//
const userRoutes = require('./routes/user.routes');//

userRoutes(app);//
eventsRoutes(app);//

app.listen(port, () => console.log(`Listening on port: ${port}`) );//