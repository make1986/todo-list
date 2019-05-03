import Home from "./Pages/Home";

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
    component: Home
  }
];

export default routes;
