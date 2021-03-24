const {Router} = require('express');
const User = require('../models/user');
const router = Router();

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
    } else {
        res.render('pages/signup');
    }
});

router.post("/signup", async (req, res) => {
    const {username, email, password} = req.body;
    
    const existsEmail = await User.exists({email});
    const existsUsername = await User.exists({username});

    if (existsEmail || existsUsername) {
        req.session.destroy();
        res.redirect('/signup?error=user_already_exists');
    } else {
        const user = new User({
            username,
            email,
            password,
            shops: []
        });

        await user.save();

        req.session.loggedIn = true;
        req.session.username = username;

        res.redirect('/dashboard');
    }
});

module.exports = router;
