const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    release_date: "10-12-2023",
  },
  {
    id: 2,
    title: "3 Idiots",
    director: "Rajkumar Nolan",
    release_date: "10-12-2009",
  },
];

//get the movies list in the form of json
app.get("/movie", (req, res) => {
  res.json(movies);
});

//add movie to the list
app.post("/movie", (req, res) => {
  const movie = req.body;
  console.log(movie);
  movies.push(movie);
  res.send("Movie is added to the list");
});

//search for a movie in the list
app.get("/movie/:id", (req, res) => {
  const id = req.params.id;

  for (let movie of movies) {
    if (movie.id === id) {
      res.json(movie);
      //   console.log(movie);
      return;
    }
  }
  //   res.status(404).send("Movie is not found");
});

app.listen(port, () => console.log(`server is listening at port ${port}`));
