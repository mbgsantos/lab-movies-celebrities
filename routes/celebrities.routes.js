// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/celebrities", async (req, res) => {
    const celebritiesCreated = await Celebrity.find();
    res.render("celebrities/celebrities", {celebrities: celebritiesCreated});
});

router.get("/celebrities/create", async (req, res) => {
    res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.create({name, occupation, catchPhrase});
    res.redirect("/celebrities");
});

module.exports = router;