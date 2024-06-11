import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Hi Shree!");
});

const port = 6969;

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
