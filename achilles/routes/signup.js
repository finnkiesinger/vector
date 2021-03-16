const {Router} = require('express');

const router = Router();

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
    } else {
        res.render('pages/signup');
    }
});

router.post("/signup", (req, res) => {
    const {username, password} = req.body;
});

module.exports = router;