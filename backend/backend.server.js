const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors())

const API_PORT = 7001;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const StudentRoute = require('./routes/backend.route.student');

app.use('/student', StudentRoute);

app.listen(process.env.PORT || API_PORT,()=>{
    console.log(`API Server is Listening at http:/localhost:${API_PORT}`);
});