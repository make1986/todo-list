const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String
    },
    login: {
      type: String
    },
    pass: {
      type: String
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const User = mongoose.model("User", UserSchema);
