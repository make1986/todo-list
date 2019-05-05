const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    parent: {
      type: String
    },
    data: {
      type: Array
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Todo = mongoose.model("Todo", TodoSchema);
