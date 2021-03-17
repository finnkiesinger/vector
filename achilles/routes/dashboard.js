const {Router} = require('express');

const router = Router();

router.get("/dashboard", (req, res) => {
    if (req.session.loggedIn) {
        const shops = [
            {
                title: "Shop 1",
                role: "Admin",
                handle: "shop-1"
            },
            {
                title: "Shop 2",
                role: "Collaborator",
                handle: "shop-2"
            },
            {
                title: "Shop 3",
                role: "Collaborator",
                handle: "shop-3"
            },
            {
                title: "Shop 4",
                role: "Collaborator",
                handle: "shop-4"
            },
        ];
        res.render("pages/dashboard", {shops: []});
    } else {
        res.redirect("/login");
    }
});

module.exports = router;