import express from "express";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { createWriteStream } from "fs";
import morgan from "morgan";
import session from "express-session";
import compression from "compression";
import home from "./routes/home/index.js";
import admin from "./routes/admin/index.js";
import api from "./routes/api/index.js";
import connectToDb from "./db/index.js";
import { error } from "console";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const logFile = join(__dirname, "blogchef.log");

app.use(compression());
// app.use(morgan("dev"));
app.use(morgan(":method - :url - :date - :response-time ms")); //Custom Format
app.use(
  morgan(":method - :url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  "/admin",
  session({
    name: "sessId", // Name of cookie to store data
    resave: false, // to prevent unmodified data to get stored in store
    saveUninitialized: true, // save uninitialized session data into store

    // sign session key
    secret: process.env.sessionSecret,

    cookie: {
      httpOnly: true, // to prevent malicious js code on client
      maxAge: 18000000, // time period of cookie in ms
      secure: app.get("env") === "production" ? true : false,
    },
  })
);
app.set("view engine", "pug");

app.use("/", home);

app.use("/admin", admin);

app.use("/api", api);

// 2. Setting up mongoose ODM
connectToDb()
  .then(() =>
    app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"))
  )
  .catch((error) => {
    console.error(`MondgoDB Atlas error : ${error}`);
    process.exit();
  });

//----------------------------------------------------------------
// app.get("/", (req, res) => {
//   res.send("<h1>BlogChef</h1>");
// });

// app
//   .get("/admin", (req, res) =>
//     req.session.user
//       ? res.redirect("/admin/dashboard")
//       : res.redirect("/admin/login")
//   )
//   .get("/admin/login", (req, res) => res.render("login"))
//   .post("/admin/login", (req, res) => {
//     const { email, password } = req.body;
//     if (email === "shash@m.com" && password === "pass123") {
//       req.session.user = "Shashank Surjekar"; // storing data in session
//       return res.redirect("/admin/dashboard");
//     }

//     res.redirect("/admin/login");
//   });

// app.get("/admin/dashboard", protectRoute("/admin/login"), (req, res) =>
//   res.render("dashboard", {
//     user: req.session.user,
//     posts: [
//       {
//         id: 1,
//         author: "Joe M",
//         title: "I love Express",
//         content: "Express is wonderful framework for building Node.js apps",
//       },
//       {
//         id: 2,
//         author: "Mike F",
//         title: "Have you tried Pug?",
//         content:
//           "I recently tried the Pug templating language and its Excellent!",
//       },
//     ],
//   })
// );

// app.get("/admin/logout", (req, res) => {
//   delete req.session.user;
//   res.redirect("/admin/login");
// });

// app.post("/admin/approve", (req, res) => res.redirect("/admin/dashboard"));

// app.post("/api/posts", (req, res) => {
//   console.log(req.body);
//   res.json({ message: "Got It" });
// });
