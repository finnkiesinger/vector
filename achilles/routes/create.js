const {Router} = require('express');
const User = require("../models/user");
const Shop = require("../models/shop");
const handlify = require("../utils/handlify");

const router = Router();

router.get('/create', (req, res) => {
    if (req.session.loggedIn) {
        res.render('pages/create');
    } else {
        res.redirect('/login?redirect=create');
    }
});

router.post("/create", async (req, res) => {
    if (!req.session.loggedIn || !req.session.username) return res.redirect("/login?redirect=create");

    const {title} = req.body;

    const exists = await Shop.exists({title});

    if (exists) {
        res.redirect("/create?error=shop_already_exists");
    } else {
        const user = await User.findOne({username: req.session.username});

        if (!!user) {
            const handle = handlify(title);
            const shop = new Shop({
                title,
                handle
            });

            await shop.save();

            user.shops = [...user.shops, handle];

            await user.save();

            res.redirect("/dashboard");
        }
    }
});

module.exports = router;