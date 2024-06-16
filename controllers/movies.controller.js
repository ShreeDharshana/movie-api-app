export const movieCreate = (req, res) => {
  // res.send("create movies");
  console.log(req.body);
  return res.json(req.body);
};

export const movieIndex = (req, res) => {
  res.send("Get all movies");
};

export const movieUpdate = (req, res) => {
  res.send("update movies");
};

export const movieDelete = (req, res) => {
  res.send("delete movies");
};
