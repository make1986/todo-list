import Home from "./Pages/Home";

import { HandlerAPI } from "./api";

function getParams(path, noparams) {
  let params = path.split(noparams)[1];
  if (!params || params.lenght === 0) {
    return [];
  } else {
    return params.split("/");
  }
}

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    handlerClass: HandlerAPI,
    params: {
      url: "user/get_data",
      type: "get",
      params: path => getParams(path, "/")
    },
    title: "TODO list"
  }
];

export default routes;
