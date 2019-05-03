/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(4);

var _cors2 = _interopRequireDefault(_cors);

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(6);

var _fs2 = _interopRequireDefault(_fs);

var _compression = __webpack_require__(7);

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = __webpack_require__(8);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = __webpack_require__(9);

var _helmet2 = _interopRequireDefault(_helmet);

var _expressSession = __webpack_require__(1);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _config = __webpack_require__(14);

var _config2 = _interopRequireDefault(_config);

var _connect = __webpack_require__(10);

var _connect2 = _interopRequireDefault(_connect);

var _sessionStore = __webpack_require__(11);

var _sessionStore2 = _interopRequireDefault(_sessionStore);

var _router = __webpack_require__(18);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = __webpack_require__(13).Server(app);


_connect2.default.setUpConnect();
app.use((0, _helmet2.default)());
app.use((0, _cors2.default)({ origin: _config2.default.API_PREFIX, methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.urlencoded({ limit: "50mb", extended: true }));
app.use(_bodyParser2.default.json({ limit: "50mb", extended: true }));

app.use((0, _expressSession2.default)({
  secret: _config2.default.SECRET_SESSION,
  resave: false,
  key: "sid",
  saveUninitialized: false,
  store: _sessionStore2.default
}));

app.use(_express2.default.static("public"));
app.use(_router2.default);

http.listen(_config2.default.PORT, function () {
  console.log("Server is listening on port: " + _config2.default.PORT);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(14);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.set("useFindAndModify", false);

module.exports.setUpConnect = function () {
  _mongoose2.default.connect(_config2.default.MONGO_URL, { useNewUrlParser: true });
  var db = _mongoose2.default.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Mongo connected!");
  });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(0);
var mongoose = __webpack_require__(2);
var session = __webpack_require__(1);
var MongoStore = __webpack_require__(12)(session);

var sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection
});

module.exports = sessionStore;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  PORT: process.env.PORT || 3000,
  API_PREFIX: "http://localhost:3000",
  IMAGE_PREFIX: "http://localhost:3000/Uploads/Images",
  MONGO_URL: "mongodb://localhost/todolist",
  SECRET_SESSION: "secret-super-secret"
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(22);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParams(path, noparams) {
  var params = path.split(noparams)[1];
  if (!params || params.lenght === 0) {
    return [];
  } else {
    return params.split("/");
  }
}

var routes = [{
  path: "/",
  exact: true,
  component: _Home2.default
}];

exports.default = routes;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(19);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(20);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(16);

var _config = __webpack_require__(14);

var _config2 = _interopRequireDefault(_config);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

var _routes = __webpack_require__(17);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("*", function (req, res, next) {
  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};

  var handlerObject = activeRoute.handlerClass ? new activeRoute.handlerClass(activeRoute.params.url, activeRoute.params.params(req.path)) : null;

  var promise = handlerObject !== null ? handlerObject.response() : Promise.resolve();

  var title = activeRoute.title ? activeRoute.title : "TODO list";

  promise.then(function (data) {
    var context = { data: data };
    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, null)
    ));

    res.send("\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n          <title>" + title + "</title>\n          <link rel=\"shortcut icon\" href=\"/Static/favicon.ico\" type=\"image/x-icon\">\n          <script src=\"/bundle.js\" defer></script>\n          <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data) + "</script>\n        </head>\n        <body>\n          <div id=\"app\">" + markup + "</div>\n        </body>\n        </html>\n        ");
  }).catch(next);
});

module.exports = router;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(16);

var _routes = __webpack_require__(17);

var _routes2 = _interopRequireDefault(_routes);

var _ = __webpack_require__(23);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { error: "" };
    _this.addError = _this.addError.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "addError",
    value: function addError(err) {
      this.setState({ error: err });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var error = this.state.error;

      return _react2.default.createElement(
        "div",
        { className: "page" },
        _react2.default.createElement(_reactRouterDom.Route, { component: this.HeaderWithProps }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _routes2.default.map(function (_ref) {
            var path = _ref.path,
                exact = _ref.exact,
                C = _ref.component,
                rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

            return _react2.default.createElement(_reactRouterDom.Route, {
              key: path,
              path: path,
              exact: exact,
              render: function render(props) {
                return _react2.default.createElement(C, _extends({}, props, rest, { addError: _this2.addError }));
              }
            });
          }),
          _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
              return _react2.default.createElement(_2.default, props);
            } })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    "div",
    { className: "page__container home-page" },
    _react2.default.createElement(
      "p",
      null,
      "Home page"
    )
  );
};

exports.default = HomePage;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P404 = function P404() {
  return _react2.default.createElement(
    "div",
    { className: "page__container P-404" },
    _react2.default.createElement(
      "h3",
      null,
      "404 Error"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Page is not found"
    )
  );
};

exports.default = P404;

/***/ })
/******/ ]);