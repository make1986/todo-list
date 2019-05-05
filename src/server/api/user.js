import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../../etc/config";
import checkAuth from "../checkAuth";

import "../db/Models/User";
const User = mongoose.model("User");

import "../db/Models/Todo";
const Todo = mongoose.model("Todo");

import DataBase from "../db/Queries";
import UserDataBase from "../db/Queries/User";

router.get("/get_data", (req, res) => {
  if (!checkAuth(req).ok) {
    return res.json({ ok: false, data: null });
  } else {
    const { id } = checkAuth(req);
    let response;
    const todo = new DataBase(Todo);
    const user = new DataBase(User);
    todo
      .getOne({ parent: id })
      .then(data => {
        response = data;
        return user.getById(id);
      })
      .then(data => {
        response.user = data.data;
        return res.json(response);
      })
      .catch(err => {
        return res.json({ ok: false, data: null });
      });
  }
});

router.post("/add", (req, res) => {
  const { login, pass, name } = req.body;
  let isEmpty = [];
  if (!login) {
    isEmpty.push("login");
  }
  if (!pass) {
    isEmpty.push("pass");
  }
  if (!name) {
    isEmpty.push("name");
  }
  if (isEmpty.length > 0) {
    return res.json({ ok: false, err: "NOT_VALID", data: isEmpty });
  } else {
    const user = new UserDataBase(User);
    user
      .getOne({ login: req.body.login })
      .then(data => {
        if (data.data) {
          return { ok: false, err: "DUPLICATE_USER" };
        } else {
          return user.addUser(req.body);
        }
      })
      .then(data => {
        return res.json(data);
      })
      .catch(err => {
        console.log(err);
        return res.status(400).json(err);
      });
  }
});

router.post("/auth", (req, res) => {
  const { login, pass } = req.body;
  let userData = null;
  let isEmpty = [];
  if (!login) {
    isEmpty.push("login");
  }
  if (!pass) {
    isEmpty.push("pass");
  }
  if (isEmpty.length > 0) {
    return res.json({ ok: false, err: "NOT_VALID", data: isEmpty });
  } else {
    const user = new UserDataBase(User);
    user
      .getOne({ login: req.body.login })
      .then(data => {
        if (data.data) {
          userData = data.data;
          return user.comparePass(pass, data.data.pass);
        } else {
          return { ok: false, err: "INCORRECT_USER" };
        }
      })
      .then(data => {
        if (data.ok) {
          const token = jwt.sign({ id: userData._id.toString() }, JWT_SECRET);
          res.cookie("auth_token", token);
          return res.json({ ok: true });
        } else {
          return res.json(data);
        }
      })
      .catch(err => {
        console.log(err);
        return res.status(400).json(err);
      });
  }
});

module.exports = router;
