const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sejarah = require("./routes/sejarahSamsatRoute");
const visimisi = require("./routes/visimisiRoute");
const ucapanSamsatRoute = require("./routes/ucapanSamsatRoute");
const pendaftaranSamsatRoute = require("./routes/pendaftaranSamsatRoute");
const pelayananRoute = require("./routes/pelayananRoute");
const beritaRoute = require("./routes/beritaRoute");
const loginRoute = require("./routes/loginRoute");
// const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

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

// Konfigurasi penyimpanan session di database
const sessionStore = new MySQLStore({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "db_samsat_mkw",
});

// Middleware untuk session
app.use(
  session({
    key: "session_cookie_name",
    secret: "secretKey",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// Middleware untuk parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sejarah);
app.use(visimisi);
app.use(ucapanSamsatRoute);
app.use(pendaftaranSamsatRoute);
app.use(pelayananRoute);
app.use(beritaRoute);
app.use(loginRoute);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
