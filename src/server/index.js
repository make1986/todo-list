import express from "express";
const app = express();
const http = require("http").Server(app);
import cors from "cors";
import path from "path";
import fs from "fs";

import compression from "compression";
import bodyParser from "body-parser";
import helmet from "helmet";
import session from "express-session";
import cookieParser from "cookie-parser";

import config from "../etc/config";
import db from "./db/connect";
import sessionStore from "./sessionStore";
import { user, todo } from "./api";
import routes from "./router";

app.use(cookieParser());
db.setUpConnect();
app.use(helmet());
app.use(
  cors({ origin: config.API_PREFIX, methods: "GET,HEAD,PUT,PATCH,POST,DELETE" })
);
app.use(compression());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use(
  session({
    secret: config.SECRET_SESSION,
    resave: false,
    key: "sid",
    saveUninitialized: false,
    store: sessionStore
  })
);

app.use("/api/user", user);
app.use("/api/todo", todo);

app.use(express.static("public"));
app.use(routes);

http.listen(config.PORT, () => {
  console.log(`Server is listening on port: ${config.PORT}`);
});
