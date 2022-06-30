import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
// ap.use('/createPost')

const CONNECTION_URL =
  "mongodb+srv://Bonane_nbus:Cuthbert@nodeexpressproject.tsi27no.mongodb.net/?retryWrites=true&w=majority&wtimeoutMS=5000";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}...`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify:", false);
