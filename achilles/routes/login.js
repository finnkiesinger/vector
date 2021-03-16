const {Router} = require('express');
const User = require('../models/user');

const router = Router();

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/dashboard");
    } else {
        res.render('pages/login');
    }
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});

    if (!!user) {
        if (user.password === password) {
            req.session.loggedIn = true;
            req.session.username = username;

            res.redirect("/dashboard");
        } else {
            res.redirect("/login?error=username_or_password_no_match");
        }
    } else {
        res.redirect("/login?error=user_not_found");
    }
});

module.exports = router;
