const {Router} = require('express');

const router = Router();

router.get("/login", (req, res) => {
    res.render('pages/login');
});

module.exports = router;