const {Router} = require('express');
const User = require('../models/user');
const Shop = require('../models/shop');

const router = Router();

router.get("/dashboard", async (req, res) => {
    if (!req.session.loggedIn || !req.session.username) return res.redirect("/login");

    const user = await User.findOne({username: req.session.username});

    if (!user) return res.redirect("/login");

    const shops = [];

    for (let handle of user.shops) {
        const shop = await Shop.findOne({handle});
        shops.push(shop);
    }

    res.render("pages/dashboard", {shops});
});

module.exports = router;