const {Router} = require('express');

const router = Router();

router.get("/dashboard", (req, res) => {
    if (req.session.loggedIn) {
        res.render("pages/dashboard");
    } else {
        res.redirect("/login");
    }
});

module.exports = router;