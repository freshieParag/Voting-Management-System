const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;


const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.listen(PORT, () =>console.log(`Server is Listening in Port number ${PORT}`))