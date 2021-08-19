const express = require("express");
const app = express();
app.use(express());
app.use(express.json());

require("./startup/db")();
require("./startup/prod")(app);
require("./startup/routes")(app);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
