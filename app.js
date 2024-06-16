import express from "express";
import movieRoutes from "./routes/movies.routes.js";
import connectDB from "./lib/db.js";

const app = express();
app.use(express.json());

connectDB();
app.get("/", (req, res) => {
  res.json("Hi Shree!");
});

app.use("/movies", movieRoutes);
const port = 6969;

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
