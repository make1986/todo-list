import DataBase from "./index";
import bcrypt from "bcrypt-nodejs";
import jwt from "jsonwebtoken";

class UserDataBase extends DataBase {
  constructor(Model) {
    super(Model);
    this.setHash = this.setHash.bind(this);
    this.comparePass = this.comparePass.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(data) {
    return this.setHash(data.pass).then(pass => {
      data.pass = pass;
      return this.add(data);
    });
  }
  setHash(pass) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(pass, bcrypt.genSaltSync(12), null, (err, hash) => {
        if (err) {
          reject({ ok: false, err: "Password hashing failed!" });
        } else {
          resolve(hash);
        }
      });
    });
  }
  comparePass(clientpass, hashpass) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(clientpass, hashpass, (err, response) => {
        if (err) {
          reject({ ok: false, err: "Password compare failed!" });
        } else {
          if (!response) {
            resolve({ ok: false, err: "INCORRECT_USER" });
          } else {
            resolve({ ok: true });
          }
        }
      });
    });
  }
}

export default UserDataBase;
