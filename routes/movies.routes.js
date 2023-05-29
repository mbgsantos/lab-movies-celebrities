// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies", async (req, res) => {
    const moviesCreated = await Movie.find();
    res.render("movies/movies", {movies: moviesCreated});
});

router.get("/movies/create", async (req, res) => {
    const celebrity = await Celebrity.find();
    res.render("movies/new-movie", {celebrity});
});

router.post("/movies/create", async (req, res) => {
    const {title, genre, plot, cast} = req.body;
    await Movie.create({title, genre, plot, cast});
    res.redirect("/movies");
});

router.post("/movies/delete/:id", async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
});

router.get("/movies/:id/edit", async (req, res) => {
    const movie = await Movie.findById(req.params.id).populate("cast");
    const celebrity = await Celebrity.find();
    res.render("movies/edit-movie", {movie, celebrity});
});

router.post("/movies/edit", async (req, res) => {
    const {title, genre, plot, cast} = req.body;
    await Movie.findByIdAndUpdate(req.query.id, {title, genre, plot, cast});
    res.redirect(`/movies/${req.query.id}`);
});

router.get("/movies/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id).populate("cast");
    res.render("movies/movie-details", movie);
});

module.exports = router;