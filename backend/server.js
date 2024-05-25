const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sejarah = require("./routes/sejarahSamsatRoute");
const visimisi = require("./routes/visimisiRoute");
const ucapanSamsatRoute = require("./routes/ucapanSamsatRoute");
const pendaftaranSamsatRoute = require("./routes/pendaftaranSamsatRoute");
const pelayananRoute = require("./routes/pelayananRoute");
const beritaRoute = require("./routes/beritaRoute");

const PORT = 8000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

app.use(sejarah);
app.use(visimisi);
app.use(ucapanSamsatRoute);
app.use(pendaftaranSamsatRoute);
app.use(pelayananRoute);
app.use(beritaRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
