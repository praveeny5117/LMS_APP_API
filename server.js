const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
// const bodyparser = require('body-parser')

const connectDB = require('./database/connections')

var corsOptions = {
    origin: '*'
    // origin: "http://localhost:4200"
};
const app = express();
app.use(cors(corsOptions));

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080


app.use(morgan('tiny'))

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',require('./router/router'))
app.use('/onboard',require('./router/onBoard_router'))
app.use('/leave',require('./router/leave_router'))


app.listen(PORT,()=>{console.log(`Server running PORT => ${PORT}`);}) 