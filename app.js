const express = require("express");
const app = express();
app.use(express());
app.use(express.json());
require("dotenv").config();

if (!process.env.MONGO_URI) {
  console.error(
    `No "MONGO_URI" variable set. Please set an env variable with the db uri as the value`
  );
  process.exit(1);
}

require("./startup/db")();
require("./startup/prod")(app);
require("./startup/routes")(app);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
