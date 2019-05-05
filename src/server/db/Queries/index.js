export default class DataBase {
  constructor(Model) {
    this.Model = Model;
    this.add = this.add.bind(this);
    this.getById = this.getById.bind(this);
    this.edit = this.edit.bind(this);
  }
  add(data) {
    const newObject = new this.Model(data);
    return new Promise((resolve, reject) => {
      newObject.save({}, (err, doc) => {
        if (err) {
          reject({ ok: false, err });
        }
        resolve({ ok: true, data: doc });
      });
    });
  }
  edit(id, data) {
    return new Promise((resolve, reject) => {
      this.Model.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true },
        (err, doc) => {
          if (err) {
            reject({ ok: false, err });
          }
          resolve({ ok: true, data: doc });
        }
      );
    });
  }
  getByParams(params) {
    return new Promise((resolve, reject) => {
      this.Model.find(params, (err, docs) => {
        if (err) {
          reject({ ok: false, err });
        }
        resolve({ ok: true, data: docs });
      });
    });
  }
  getById(id) {
    return new Promise((resolve, reject) => {
      this.Model.findById(id, (err, doc) => {
        if (err) {
          reject({ ok: false, err });
        }
        resolve({ ok: true, data: doc });
      });
    });
  }
  getOne(params) {
    return new Promise((resolve, reject) => {
      this.Model.findOne(params, (err, doc) => {
        if (err) {
          reject({ ok: false, err });
        }
        resolve({ ok: true, data: doc });
      });
    });
  }
}
