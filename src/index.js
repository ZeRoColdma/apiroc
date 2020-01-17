const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors')



const app = express();

mongoose.connect(
  "mongodb+srv://carlos:1001598@carlosestudo-oixuq.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
