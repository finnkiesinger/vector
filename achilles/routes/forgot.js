const {Router} = require('express');

const router = Router();

router.get("/forgot", (req, res) => {
    res.render("pages/forgot");
})

router.post("/forgot", (req, res) => {
    res.redirect("/");
});

module.exports = router;
