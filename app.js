const express = require('express');
const createHttpError = require("http-errors");
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express()

app.use(morgan('dev'))
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use('/', require('./routes/index.route'));
app.use('/auth', require('./routes/auth.route'));
app.use('/user', require('./routes/user.route'));


app.use((req,res,next)=>{
    next(createHttpError.NotFound())
})

app.use((error,req,res,next)=>{
    error.status = error.status || 500
    res.status(error.status)  
    res.send(error)
})




const PORT = process.env.PORT;
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    app.listen(PORT, () => console.log(`Database connected Server 🚀 PORT: ${PORT} ✅`));
    // User.insertMany(dataUser);
  }).catch((error) => console.log(`${error} 💀 not connected to Database`));
  

// app.listen(PORT, ()=> console.log(`🚀 running on port ${PORT}`));