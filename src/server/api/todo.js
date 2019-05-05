import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import "../db/Models/Todo";
const Todo = mongoose.model("Todo");

import DataBase from "../db/Queries";
import checkAuth from "../checkAuth";

router.post("/set", (req, res) => {
  if (!checkAuth(req).ok) {
    return res.json({ ok: false, data: null });
  } else {
    const todo = new DataBase(Todo);
    const { id } = req.body;
    const body = req.body.data;
    todo
      .getOne({ parent: id })
      .then(data => {
        if (data.data) {
          return todo.edit(data.data._id, { data: body });
        } else {
          return todo.add({ parent: id, data: body });
        }
      })
      .then(data => {
        return res.json(data);
      })
      .catch(err => {
        return res.json({ ok: false, data: null });
      });
  }
});

module.exports = router;
