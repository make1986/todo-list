import express from "express";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../etc/config";

const checkAuth = req => {
  if (req.cookies["auth_token"]) {
    const token = req.cookies["auth_token"];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return { ok: true, id: decoded.id };
    } catch (e) {
      if (e.message === "invalid signature") {
        return { ok: false, err: "INVALID_SIGNATURE" };
      } else {
        return { ok: false, err: "OTHER_ERR" };
      }
    }
  } else {
    return { ok: false, err: "NOT_AUTH" };
  }
};

export default checkAuth;
