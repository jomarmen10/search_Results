const express = require("express");
const app = express();
const Port = 8080;
const cors = require("cors");

require("./db/db");

const Movie = require("./model/Movie");

const corsOptions = {
    origin: 3000,
    credentials: true,
    optionsSuccessStatus: 200,
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));

// routes
app.get("/test", (req, res) => {
    res.json("hello world");
});

// create movie route
app.post("/create", async (req, res) => {
    try {
        const createdMovie = await Movie.create(req.body);
        res.json({
            createdMovie,
            success: true,
        });
    } catch (err) {
        res.json({
            message: "not created",
        });
    }
});

// find all
app.get("/findAll", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json({
            movies,
        });
    } catch (err) {
        res.json({
            message: "no movies",
        });
    }
});

app.get("/findMovies", async (req, res) => {
    try {
        const movies = await Movie.find({ category: "movies" });
        res.json({
            movies,
        });
    } catch (err) {
        res.json({
            message: "no movies",
        });
    }
});

app.listen(Port, () => {
    console.log("port:", Port);
});
