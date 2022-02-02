import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let movieData = undefined;
fs.readFile("./data/movies.json", "UTF8", (err, data) => {

    console.log(err);
    console.log(data);
    movieData = data;
})

const port = 8000;
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/api/movies', (req,res) => {
    res.send(movieData)
});

app.get('*', (req,res) => { res.sendFile(path.join(__dirname + 'build/index.html'))});
app.listen(port , () => console.log("Listening on Port: " + port));