import fetch from "isomorphic-fetch";
import { API_PREFIX } from "../../etc/config";
import axios from "axios";

export class HandlerAPI {
  constructor(url, type, data) {
    switch (type) {
      case "get":
        let params = "";
        for (let key in data) {
          params += `/${data[key]}`;
        }
        this.url = encodeURI(`${API_PREFIX}/api/${url}${params}`);
        break;
      case "post":
        this.url = `${API_PREFIX}/api/${url}`;
        break;
    }
    this.data = data;
    this.type = type;
    this.response = this.response.bind(this);
  }
  response() {
    if (this.type === "get") {
      return fetch(this.url)
        .then(res => res.json())
        .catch(err => {
          console.error(err);
          return { ok: false };
        });
    } else {
      return axios
        .post(this.url, this.data)
        .then(res => {
          if (
            res.status >= 200 &&
            res.status < 300 &&
            res.data &&
            res.data.ok
          ) {
            return res.data;
          } else {
            return res.data;
          }
        })
        .catch(err => {
          console.error(err);
          return { ok: false };
        });
    }
  }
}
