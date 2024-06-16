import Movie from "../model/movies.model.js";
export const movieCreate = async (req, res) => {
  // res.send("create movies");
  // console.log(req.body);

  //validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  // return res.json(req.body);
};

export const movieIndex = async (req, res) => {
  // res.send("Get all movies");
  try {
    const movie = await Movie.find();
    res.json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const movieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: "Requested movie not found" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const movieUpdate = async (req, res) => {
  // res.send("update movies");

  try {
    const result = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      { new: true }
    );
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  // if (req.body.title != null) {
  //   res.Movie.title = req.body.title;
  // }
  // if (req.body.desc != null) {
  //   res.Movie.desc = req.body.desc;
  // }
  // try {
  //   const updatedMovie = await res.movie.save();
  //   res.json(updatedMovie);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
};

export const movieDelete = (req, res) => {
  res.send("delete movies");
};
