import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression';
import cors from 'cors';
require("dotenv").config();

const app = express();

app.use(cors({
    credentials:true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server= http.createServer(app);
server.listen (parseInt(process.env.PORT,10),() => {
    console.log("Server running on > http://localhost:1000/ ");
})

app.get('/get', (req, res) => {
    res.send('POST request to the homepage')
})



