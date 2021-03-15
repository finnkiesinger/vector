const express = require('express');
const path = require('path');
const index = require('./routes');
const login = require('./routes/login');
const signup = require('./routes/signup');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("./public"));

app.use(express.json());

app.use(index);
app.use(login);
app.use(signup);

app.listen(PORT, () => console.log("Listening on port", PORT));