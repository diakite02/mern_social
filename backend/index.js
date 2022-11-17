const express = require('express');
const mongoose = require('mongoose');
const app = express();
const doten = require('dotenv');
const morgan = require('morgan');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')


// my middlewares
doten.config();

app.use(express.json())
app.use(morgan('common'))

// mongo connection

mongoose.connect(process.env.MONGO_URL, () => { console.log("data base connected") }, {

})


// routers
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/post', postRoute);





app.listen(8800, () => {
    console.log(`seveur is ready for any request`);
})