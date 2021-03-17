require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');

const index = require('./routes');
const login = require('./routes/login');
const logout = require('./routes/logout');
const signup = require('./routes/signup');
const dashboard = require('./routes/dashboard');
const forgot = require('./routes/forgot');
const create = require('./routes/create');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(async () => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.use(express.static("./public"));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(session({
        secret: process.env.SECRET || 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000*60*60*24*360*10,
        }
    }));
    
    app.use(login);
    app.use(logout);
    app.use(signup);
    app.use(dashboard);
    app.use(forgot)
    app.use(index);
    app.use(create);
    
    app.listen(PORT, () => {
        console.log("Listening on port", PORT);
        console.log("Open the page at: http://localhost:" + PORT);
    });
});


