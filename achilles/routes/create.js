const {Router} = require('express');

const router = Router();

router.get('/create', (req, res) => {
    if (req.session.loggedIn) {
        res.render('pages/create');
    } else {
        res.redirect('/login?redirect=create');
    }
});

module.exports = router;