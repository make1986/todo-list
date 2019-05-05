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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  PORT: process.env.PORT || 3000,
  API_PREFIX: "https://todo-project-marat.herokuapp.com",
  IMAGE_PREFIX: "https://todo-project-marat.herokuapp.com/Uploads/Images",
  MONGO_URL: "mongodb://marat:5024223Qq@ds113700.mlab.com:13700/todo-marat",
  SECRET_SESSION: "secret-super-secret",
  JWT_SECRET: "welcome, man"
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandlerAPI = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isomorphicFetch = __webpack_require__(38);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(2);

var _axios = __webpack_require__(39);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandlerAPI = exports.HandlerAPI = function () {
  function HandlerAPI(url, type, data) {
    _classCallCheck(this, HandlerAPI);

    switch (type) {
      case "get":
        var params = "";
        for (var key in data) {
          params += "/" + data[key];
        }
        this.url = encodeURI(_config.API_PREFIX + "/api/" + url + params);
        break;
      case "post":
        this.url = _config.API_PREFIX + "/api/" + url;
        break;
    }
    this.data = data;
    this.type = type;
    this.response = this.response.bind(this);
  }

  _createClass(HandlerAPI, [{
    key: "response",
    value: function response() {
      if (this.type === "get") {
        return (0, _isomorphicFetch2.default)(this.url).then(function (res) {
          return res.json();
        }).catch(function (err) {
          console.error(err);
          return { ok: false };
        });
      } else {
        return _axios2.default.post(this.url, this.data).then(function (res) {
          if (res.status >= 200 && res.status < 300 && res.data && res.data.ok) {
            return res.data;
          } else {
            return res.data;
          }
        }).catch(function (err) {
          console.error(err);
          return { ok: false };
        });
      }
    }
  }]);

  return HandlerAPI;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataBase = function () {
  function DataBase(Model) {
    _classCallCheck(this, DataBase);

    this.Model = Model;
    this.add = this.add.bind(this);
    this.getById = this.getById.bind(this);
    this.edit = this.edit.bind(this);
  }

  _createClass(DataBase, [{
    key: "add",
    value: function add(data) {
      var newObject = new this.Model(data);
      return new Promise(function (resolve, reject) {
        newObject.save({}, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: doc });
        });
      });
    }
  }, {
    key: "edit",
    value: function edit(id, data) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.Model.findByIdAndUpdate(id, { $set: data }, { new: true }, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: doc });
        });
      });
    }
  }, {
    key: "getByParams",
    value: function getByParams(params) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.Model.find(params, function (err, docs) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: docs });
        });
      });
    }
  }, {
    key: "getById",
    value: function getById(id) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.Model.findById(id, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: doc });
        });
      });
    }
  }, {
    key: "getOne",
    value: function getOne(params) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.Model.findOne(params, function (err, doc) {
          if (err) {
            reject({ ok: false, err: err });
          }
          resolve({ ok: true, data: doc });
        });
      });
    }
  }]);

  return DataBase;
}();

exports.default = DataBase;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preloader = function Preloader() {
  return _react2.default.createElement(
    "div",
    { className: "preloader" },
    _react2.default.createElement(
      "svg",
      {
        width: "200px",
        height: "200px",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: "lds-eclipse"
      },
      _react2.default.createElement(
        "path",
        {
          "ng-attr-d": "{{config.pathCmd}}",
          "ng-attr-fill": "{{config.color}}",
          stroke: "none",
          d: "M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",
          fill: "#35ac19"
        },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          calcMode: "linear",
          values: "0 50 51;360 50 51",
          keyTimes: "0;1",
          dur: "1s",
          begin: "0s",
          repeatCount: "indefinite"
        })
      )
    )
  );
};

exports.default = Preloader;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = __webpack_require__(5);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkAuth = function checkAuth(req) {
  if (req.cookies["auth_token"]) {
    var token = req.cookies["auth_token"];
    try {
      var decoded = _jsonwebtoken2.default.verify(token, _config.JWT_SECRET);
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

exports.default = checkAuth;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(3);

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  parent: {
    type: String
  },
  data: {
    type: Array
  }
}, { timestamps: { createdAt: "created_at" } });

var Todo = mongoose.model("Todo", TodoSchema);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(36);

var _Home2 = _interopRequireDefault(_Home);

var _api = __webpack_require__(4);

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
  component: _Home2.default,
  handlerClass: _api.HandlerAPI,
  params: {
    url: "user/get_data",
    type: "get",
    params: function params(path) {
      return getParams(path, "/");
    }
  },
  title: "TODO list"
}];

exports.default = routes;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withForm = function withForm(Component, api_prefix, validate) {
  var WithForm = function (_React$Component) {
    _inherits(WithForm, _React$Component);

    function WithForm(props) {
      _classCallCheck(this, WithForm);

      var _this = _possibleConstructorReturn(this, (WithForm.__proto__ || Object.getPrototypeOf(WithForm)).call(this, props));

      _this.state = {
        data: {},
        validate: validate,
        load: false
      };
      _this.handlerChange = _this.handlerChange.bind(_this);
      _this.handlerSubmit = _this.handlerSubmit.bind(_this);
      return _this;
    }

    _createClass(WithForm, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var validate = this.state.validate;

        for (var key in validate) {
          validate[key].error = false;
          this.setState({ validate: validate });
        }
      }
    }, {
      key: "handlerChange",
      value: function handlerChange(name, value) {
        var _state = this.state,
            data = _state.data,
            validate = _state.validate;

        data[name] = value;
        if (value) {
          validate[name].isExist = true;
          validate[name].error = false;
        } else {
          validate[name].isExist = false;
        }
        this.setState({ data: data, validate: validate });
      }
    }, {
      key: "handlerSubmit",
      value: function handlerSubmit() {
        var _this2 = this;

        var _state2 = this.state,
            validate = _state2.validate,
            data = _state2.data;

        var error = false;
        for (var key in validate) {
          if (validate[key].validate && !validate[key].isExist) {
            validate[key].error = true;
            error = true;
          } else {
            validate[key].error = false;
          }
        }
        if (error) {
          this.setState({ validate: validate });
        } else {
          this.setState({ load: true });
          var handlerApi = new _api.HandlerAPI(api_prefix, "post", data);
          handlerApi.response().then(function (res) {
            _this2.setState({ load: false }, function () {
              if (res.ok) {
                _this2.props.submitCb(res);
              } else {
                if (res.err === "NOT_VALID") {
                  res.data.map(function (val) {
                    validate[val].error = true;
                  });
                  _this2.setState({ validate: validate });
                } else if (res.err === "DUPLICATE_USER") {
                  _this2.props.addError("A user with this login already exists");
                } else if (res.err === "INCORRECT_USER") {
                  _this2.props.addError("Incorrect Login or Password");
                } else {
                  _this2.props.addError(res.err ? res.err : "Server error, please try again later!");
                }
              }
            });
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _state3 = this.state,
            data = _state3.data,
            validate = _state3.validate,
            load = _state3.load;

        return _react2.default.createElement(Component, _extends({}, this.props, {
          handlerChange: this.handlerChange,
          data: data,
          validate: validate,
          handlerSubmit: this.handlerSubmit,
          load: load
        }));
      }
    }]);

    return WithForm;
  }(_react2.default.Component);

  WithForm.displayName = "WithForm(" + (Component.displayName || Component.name || "Component") + ")";
  return WithForm;
};

exports.default = withForm;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withTextfield = __webpack_require__(41);

var _withTextfield2 = _interopRequireDefault(_withTextfield);

var _reactAutosizeTextarea = __webpack_require__(48);

var _reactAutosizeTextarea2 = _interopRequireDefault(_reactAutosizeTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textfield = function Textfield(_ref) {
  var type = _ref.type,
      name = _ref.name,
      value = _ref.value,
      changeMiddleware = _ref.changeMiddleware,
      placeholder = _ref.placeholder,
      handlerFocus = _ref.handlerFocus,
      handlerBlur = _ref.handlerBlur,
      focus = _ref.focus,
      classes = _ref.classes,
      isChecklist = _ref.isChecklist;
  return _react2.default.createElement(
    "div",
    { className: "text-field" },
    type === "input" ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement("input", {
        className: classes,
        id: name,
        type: "text",
        name: name,
        value: value,
        onChange: changeMiddleware,
        onFocus: handlerFocus,
        onBlur: handlerBlur,
        autoComplete: "off",
        autoFocus: isChecklist ? true : false
      }),
      _react2.default.createElement(
        "label",
        {
          className: focus ? "text-field__label active" : "text-field__label",
          htmlFor: name
        },
        placeholder
      )
    ) : type === "password" ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement("input", {
        className: classes,
        id: name,
        type: "password",
        name: name,
        value: value,
        onChange: changeMiddleware,
        onFocus: handlerFocus,
        onBlur: handlerBlur,
        autoComplete: "off"
      }),
      _react2.default.createElement(
        "label",
        {
          className: focus ? "text-field__label active" : "text-field__label",
          htmlFor: name
        },
        placeholder
      )
    ) : type === "textarea" ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_reactAutosizeTextarea2.default, {
        id: name,
        name: name,
        value: value,
        onChange: changeMiddleware,
        onFocus: handlerFocus,
        onBlur: handlerBlur,
        autoComplete: "off",
        spellCheck: "false"
      }),
      _react2.default.createElement(
        "label",
        {
          className: focus ? "text-field__label active" : "text-field__label",
          htmlFor: name
        },
        placeholder
      )
    ) : ""
  );
};

exports.default = (0, _withTextfield2.default)(Textfield);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(16);

var _cors2 = _interopRequireDefault(_cors);

var _path = __webpack_require__(17);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(18);

var _fs2 = _interopRequireDefault(_fs);

var _compression = __webpack_require__(19);

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = __webpack_require__(20);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = __webpack_require__(21);

var _helmet2 = _interopRequireDefault(_helmet);

var _expressSession = __webpack_require__(8);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cookieParser = __webpack_require__(22);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _connect = __webpack_require__(23);

var _connect2 = _interopRequireDefault(_connect);

var _sessionStore = __webpack_require__(24);

var _sessionStore2 = _interopRequireDefault(_sessionStore);

var _api = __webpack_require__(26);

var _router = __webpack_require__(32);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = __webpack_require__(47).Server(app);


app.use((0, _cookieParser2.default)());
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

app.use("/api/user", _api.user);
app.use("/api/todo", _api.todo);

app.use(_express2.default.static("public"));
app.use(_router2.default);

http.listen(_config2.default.PORT, function () {
  console.log("Server is listening on port: " + _config2.default.PORT);
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(2);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var mongoose = __webpack_require__(3);
var session = __webpack_require__(8);
var MongoStore = __webpack_require__(25)(session);

var sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection
});

module.exports = sessionStore;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _user = __webpack_require__(27);

var _user2 = _interopRequireDefault(_user);

var _todo = __webpack_require__(31);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  user: _user2.default,
  todo: _todo2.default
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _jsonwebtoken = __webpack_require__(5);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(2);

var _checkAuth2 = __webpack_require__(9);

var _checkAuth3 = _interopRequireDefault(_checkAuth2);

__webpack_require__(28);

__webpack_require__(10);

var _Queries = __webpack_require__(6);

var _Queries2 = _interopRequireDefault(_Queries);

var _User = __webpack_require__(29);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var User = _mongoose2.default.model("User");

var Todo = _mongoose2.default.model("Todo");

router.get("/get_data", function (req, res) {
  if (!(0, _checkAuth3.default)(req).ok) {
    return res.json({ ok: false, data: null });
  } else {
    var _checkAuth = (0, _checkAuth3.default)(req),
        id = _checkAuth.id;

    var response = void 0;
    var todo = new _Queries2.default(Todo);
    var user = new _Queries2.default(User);
    todo.getOne({ parent: id }).then(function (data) {
      response = data;
      return user.getById(id);
    }).then(function (data) {
      response.user = data.data;
      return res.json(response);
    }).catch(function (err) {
      return res.json({ ok: false, data: null });
    });
  }
});

router.post("/add", function (req, res) {
  var _req$body = req.body,
      login = _req$body.login,
      pass = _req$body.pass,
      name = _req$body.name;

  var isEmpty = [];
  if (!login) {
    isEmpty.push("login");
  }
  if (!pass) {
    isEmpty.push("pass");
  }
  if (!name) {
    isEmpty.push("name");
  }
  if (isEmpty.length > 0) {
    return res.json({ ok: false, err: "NOT_VALID", data: isEmpty });
  } else {
    var user = new _User2.default(User);
    user.getOne({ login: req.body.login }).then(function (data) {
      if (data.data) {
        return { ok: false, err: "DUPLICATE_USER" };
      } else {
        return user.addUser(req.body);
      }
    }).then(function (data) {
      return res.json(data);
    }).catch(function (err) {
      console.log(err);
      return res.status(400).json(err);
    });
  }
});

router.post("/auth", function (req, res) {
  var _req$body2 = req.body,
      login = _req$body2.login,
      pass = _req$body2.pass;

  var userData = null;
  var isEmpty = [];
  if (!login) {
    isEmpty.push("login");
  }
  if (!pass) {
    isEmpty.push("pass");
  }
  if (isEmpty.length > 0) {
    return res.json({ ok: false, err: "NOT_VALID", data: isEmpty });
  } else {
    var user = new _User2.default(User);
    user.getOne({ login: req.body.login }).then(function (data) {
      if (data.data) {
        userData = data.data;
        return user.comparePass(pass, data.data.pass);
      } else {
        return { ok: false, err: "INCORRECT_USER" };
      }
    }).then(function (data) {
      if (data.ok) {
        var token = _jsonwebtoken2.default.sign({ id: userData._id.toString() }, _config.JWT_SECRET);
        res.cookie("auth_token", token);
        return res.json({ ok: true });
      } else {
        return res.json(data);
      }
    }).catch(function (err) {
      console.log(err);
      return res.status(400).json(err);
    });
  }
});

module.exports = router;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(3);

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String
  },
  login: {
    type: String
  },
  pass: {
    type: String
  }
}, { timestamps: { createdAt: "created_at" } });

var User = mongoose.model("User", UserSchema);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _bcryptNodejs = __webpack_require__(30);

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _jsonwebtoken = __webpack_require__(5);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserDataBase = function (_DataBase) {
  _inherits(UserDataBase, _DataBase);

  function UserDataBase(Model) {
    _classCallCheck(this, UserDataBase);

    var _this = _possibleConstructorReturn(this, (UserDataBase.__proto__ || Object.getPrototypeOf(UserDataBase)).call(this, Model));

    _this.setHash = _this.setHash.bind(_this);
    _this.comparePass = _this.comparePass.bind(_this);
    _this.addUser = _this.addUser.bind(_this);
    return _this;
  }

  _createClass(UserDataBase, [{
    key: "addUser",
    value: function addUser(data) {
      var _this2 = this;

      return this.setHash(data.pass).then(function (pass) {
        data.pass = pass;
        return _this2.add(data);
      });
    }
  }, {
    key: "setHash",
    value: function setHash(pass) {
      return new Promise(function (resolve, reject) {
        _bcryptNodejs2.default.hash(pass, _bcryptNodejs2.default.genSaltSync(12), null, function (err, hash) {
          if (err) {
            reject({ ok: false, err: "Password hashing failed!" });
          } else {
            resolve(hash);
          }
        });
      });
    }
  }, {
    key: "comparePass",
    value: function comparePass(clientpass, hashpass) {
      return new Promise(function (resolve, reject) {
        _bcryptNodejs2.default.compare(clientpass, hashpass, function (err, response) {
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
  }]);

  return UserDataBase;
}(_index2.default);

exports.default = UserDataBase;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(3);

var _mongoose2 = _interopRequireDefault(_mongoose);

__webpack_require__(10);

var _Queries = __webpack_require__(6);

var _Queries2 = _interopRequireDefault(_Queries);

var _checkAuth = __webpack_require__(9);

var _checkAuth2 = _interopRequireDefault(_checkAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var Todo = _mongoose2.default.model("Todo");

router.post("/set", function (req, res) {
  if (!(0, _checkAuth2.default)(req).ok) {
    return res.json({ ok: false, data: null });
  } else {
    var todo = new _Queries2.default(Todo);
    var id = req.body.id;

    var body = req.body.data;
    todo.getOne({ parent: id }).then(function (data) {
      if (data.data) {
        return todo.edit(data.data._id, { data: body });
      } else {
        return todo.add({ parent: id, data: body });
      }
    }).then(function (data) {
      return res.json(data);
    }).catch(function (err) {
      return res.json({ ok: false, data: null });
    });
  }
});

module.exports = router;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(33);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(34);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(11);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _App = __webpack_require__(35);

var _App2 = _interopRequireDefault(_App);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("*", function (req, res, next) {
  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};

  var handlerObject = activeRoute.handlerClass ? new activeRoute.handlerClass(activeRoute.params.url, activeRoute.params.type, activeRoute.params.params(req.path)) : null;

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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

var _ = __webpack_require__(45);

var _2 = _interopRequireDefault(_);

var _Error = __webpack_require__(46);

var _Error2 = _interopRequireDefault(_Error);

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
        ),
        error ? _react2.default.createElement(_Error2.default, { err: error, close: this.addError }) : ""
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withInitial = __webpack_require__(37);

var _withInitial2 = _interopRequireDefault(_withInitial);

var _Registration = __webpack_require__(40);

var _Registration2 = _interopRequireDefault(_Registration);

var _Auth = __webpack_require__(42);

var _Auth2 = _interopRequireDefault(_Auth);

var _Todo = __webpack_require__(43);

var _Todo2 = _interopRequireDefault(_Todo);

var _Preloader = __webpack_require__(7);

var _Preloader2 = _interopRequireDefault(_Preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage(_ref) {
  var view = _ref.view,
      switchLogin = _ref.switchLogin,
      handlerSubmit = _ref.handlerSubmit,
      registrationCallback = _ref.registrationCallback,
      titleAuth = _ref.titleAuth,
      addError = _ref.addError,
      authCallback = _ref.authCallback,
      withData = _ref.withData,
      data = _ref.data,
      user = _ref.user,
      callServer = _ref.callServer,
      logout = _ref.logout;
  return _react2.default.createElement(
    "div",
    { className: "page__container home-page" },
    withData ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      view === "registration" ? _react2.default.createElement(_Registration2.default, {
        submitCb: registrationCallback,
        switchLogin: switchLogin,
        handlerSubmit: handlerSubmit,
        addError: addError
      }) : view === "login" ? _react2.default.createElement(_Auth2.default, {
        submitCb: authCallback,
        title: titleAuth || "Log in and work on tasks",
        switchLogin: switchLogin,
        handlerSubmit: handlerSubmit,
        addError: addError
      }) : _react2.default.createElement(_Todo2.default, {
        logout: logout,
        callServer: callServer,
        data: data,
        user: user
      })
    ) : _react2.default.createElement(_Preloader2.default, null)
  );
};

exports.default = (0, _withInitial2.default)(HomePage);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withInitial = function withInitial(Component) {
  var WithInitial = function (_React$Component) {
    _inherits(WithInitial, _React$Component);

    function WithInitial(props) {
      _classCallCheck(this, WithInitial);

      var _this = _possibleConstructorReturn(this, (WithInitial.__proto__ || Object.getPrototypeOf(WithInitial)).call(this, props));

      var data = void 0;
      if (false) {
        data = window.__INITIAL_DATA__;
        delete window.__INITIAL_DATA__;
      } else if (props.staticContext && props.staticContext.data) {
        data = props.staticContext.data;
      }
      _this.state = {
        view: "login",
        titleAuth: "",
        data: data.data && data.data.data ? data.data.data : [],
        withData: data.data ? true : false,
        user: data.user ? data.user : null
      };
      _this.switchLogin = _this.switchLogin.bind(_this);
      _this.registrationCallback = _this.registrationCallback.bind(_this);
      _this.authCallback = _this.authCallback.bind(_this);
      _this.callServer = _this.callServer.bind(_this);
      _this.logout = _this.logout.bind(_this);
      return _this;
    }

    _createClass(WithInitial, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var withData = this.state.withData;

        if (!withData) {
          var handlerAPI = new _api.HandlerAPI("user/get_data", "get");
          handlerAPI.response().then(function (data) {
            if (data.ok) {
              _this2.setState({
                data: data && data.data && data.data.data ? data.data.data : [],
                user: data.user,
                view: "todo",
                withData: true
              });
            } else {
              _this2.setState({ withData: true });
            }
          });
        }
      }
    }, {
      key: "callServer",
      value: function callServer(data) {
        var _this3 = this;

        var id = this.state.user._id;
        var handlerAPI = new _api.HandlerAPI("todo/set", "post", { id: id, data: data });
        handlerAPI.response().then(function (res) {
          if (res.ok && res.data) {
            _this3.setState({ data: res.data.data });
          }
        });
      }
    }, {
      key: "switchLogin",
      value: function switchLogin(type) {
        this.setState({ view: type });
      }
    }, {
      key: "registrationCallback",
      value: function registrationCallback(res) {
        var data = res.data;

        var titleAuth = "Ok, " + data.name + ", log in and work on tasks";
        this.setState({ view: "login", titleAuth: titleAuth });
      }
    }, {
      key: "authCallback",
      value: function authCallback(data) {
        var _this4 = this;

        if (data.ok) {
          var handlerAPI = new _api.HandlerAPI("user/get_data", "get");
          handlerAPI.response().then(function (data) {
            if (data.ok) {
              _this4.setState({
                data: data && data.data && data.data.data ? data.data.data : [],
                user: data.user,
                view: "todo"
              });
            }
          });
        }
      }
    }, {
      key: "logout",
      value: function logout() {
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        this.switchLogin("login");
      }
    }, {
      key: "render",
      value: function render() {
        var _state = this.state,
            view = _state.view,
            titleAuth = _state.titleAuth,
            withData = _state.withData,
            data = _state.data,
            user = _state.user;

        return _react2.default.createElement(Component, _extends({
          titleAuth: titleAuth,
          view: view,
          switchLogin: this.switchLogin,
          registrationCallback: this.registrationCallback,
          authCallback: this.authCallback,
          withData: withData,
          data: data,
          user: user,
          callServer: this.callServer,
          logout: this.logout
        }, this.props));
      }
    }]);

    return WithInitial;
  }(_react2.default.Component);

  WithInitial.displayName = "WithInitial(" + (Component.displayName || Component.name || "Component") + ")";
  return WithInitial;
};

exports.default = withInitial;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withForm = __webpack_require__(13);

var _withForm2 = _interopRequireDefault(_withForm);

var _Preloader = __webpack_require__(7);

var _Preloader2 = _interopRequireDefault(_Preloader);

var _Textfield = __webpack_require__(14);

var _Textfield2 = _interopRequireDefault(_Textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Registration = function Registration(_ref) {
  var data = _ref.data,
      handlerChange = _ref.handlerChange,
      switchLogin = _ref.switchLogin,
      validate = _ref.validate,
      handlerSubmit = _ref.handlerSubmit,
      load = _ref.load;
  return _react2.default.createElement(
    "div",
    { className: "login registration" },
    _react2.default.createElement(
      "div",
      { className: "login__container" },
      _react2.default.createElement(
        "h3",
        null,
        "Sign up and start creating tasks"
      ),
      _react2.default.createElement(_Textfield2.default, {
        classes: validate.name.error ? "input error" : "input",
        name: "name",
        placeholder: "Name",
        type: "input",
        value: data.name ? data.name : "",
        handlerChange: handlerChange
      }),
      _react2.default.createElement(_Textfield2.default, {
        classes: validate.login.error ? "input error" : "input",
        name: "login",
        placeholder: "Login",
        type: "input",
        value: data.login ? data.login : "",
        handlerChange: handlerChange
      }),
      _react2.default.createElement(_Textfield2.default, {
        classes: validate.pass.error ? "input error" : "input",
        name: "pass",
        placeholder: "Password",
        type: "password",
        value: data.pass ? data.pass : "",
        handlerChange: handlerChange
      }),
      _react2.default.createElement(
        "div",
        { className: "button green login-button", onClick: handlerSubmit },
        "Continue"
      ),
      _react2.default.createElement(
        "div",
        {
          className: "button white signup-button",
          onClick: function onClick() {
            return switchLogin("login");
          }
        },
        "\u2190 Back"
      ),
      load ? _react2.default.createElement(_Preloader2.default, null) : ""
    )
  );
};

exports.default = (0, _withForm2.default)(Registration, "user/add", {
  login: { validate: true },
  pass: { validate: true },
  name: { validate: true }
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withTextFields = function withTextFields(Component) {
  var WithTextFields = function (_React$Component) {
    _inherits(WithTextFields, _React$Component);

    function WithTextFields(props) {
      _classCallCheck(this, WithTextFields);

      var _this = _possibleConstructorReturn(this, (WithTextFields.__proto__ || Object.getPrototypeOf(WithTextFields)).call(this, props));

      _this.state = {
        focus: _this.props.value ? true : false
      };
      _this.handlerFocus = _this.handlerFocus.bind(_this);
      _this.handlerBlur = _this.handlerBlur.bind(_this);
      _this.changeMiddleware = _this.changeMiddleware.bind(_this);
      return _this;
    }

    _createClass(WithTextFields, [{
      key: "handlerFocus",
      value: function handlerFocus() {
        this.setState({ focus: true });
      }
    }, {
      key: "handlerBlur",
      value: function handlerBlur() {
        if (!this.props.value || this.props.value.length === 0) {
          this.setState({ focus: false });
        }
        if (this.props.isChecklist) {
          var isIsset = !this.props.value || this.props.value.length === 0 ? false : true;
          this.props.blureChek(isIsset, this.props.name);
        } else if (this.props.isTask) {
          this.props.blureTask();
        }
      }
    }, {
      key: "changeMiddleware",
      value: function changeMiddleware(e) {
        var _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;

        this.props.handlerChange(name, value);
      }
    }, {
      key: "render",
      value: function render() {
        var focus = this.state.focus;

        return _react2.default.createElement(Component, _extends({}, this.props, {
          length: this.props.value ? this.props.value.length : 0,
          handlerFocus: this.handlerFocus,
          handlerBlur: this.handlerBlur,
          focus: focus,
          changeMiddleware: this.changeMiddleware
        }));
      }
    }]);

    return WithTextFields;
  }(_react2.default.Component);

  WithTextFields.displayName = "WithTextFields(" + (Component.displayName || Component.name || "Component") + ")";
  return WithTextFields;
};

exports.default = withTextFields;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withForm = __webpack_require__(13);

var _withForm2 = _interopRequireDefault(_withForm);

var _Preloader = __webpack_require__(7);

var _Preloader2 = _interopRequireDefault(_Preloader);

var _Textfield = __webpack_require__(14);

var _Textfield2 = _interopRequireDefault(_Textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = function Auth(_ref) {
  var data = _ref.data,
      handlerChange = _ref.handlerChange,
      switchLogin = _ref.switchLogin,
      validate = _ref.validate,
      handlerSubmit = _ref.handlerSubmit,
      title = _ref.title,
      load = _ref.load;
  return _react2.default.createElement(
    "div",
    { className: "login auth" },
    _react2.default.createElement(
      "div",
      { className: "login__container" },
      _react2.default.createElement(
        "h3",
        null,
        title
      ),
      _react2.default.createElement(_Textfield2.default, {
        classes: validate.login.error ? "input error" : "input",
        name: "login",
        placeholder: "Login",
        type: "input",
        value: data.login ? data.login : "",
        handlerChange: handlerChange
      }),
      _react2.default.createElement(_Textfield2.default, {
        classes: validate.pass.error ? "input error" : "input",
        name: "pass",
        placeholder: "Password",
        type: "password",
        value: data.pass ? data.pass : "",
        handlerChange: handlerChange
      }),
      _react2.default.createElement(
        "div",
        { className: "button green login-button", onClick: handlerSubmit },
        "Continue"
      ),
      _react2.default.createElement(
        "div",
        {
          className: "button white signup-button",
          onClick: function onClick() {
            return switchLogin("registration");
          }
        },
        "Sign Up"
      ),
      load ? _react2.default.createElement(_Preloader2.default, null) : ""
    )
  );
};

exports.default = (0, _withForm2.default)(Auth, "user/auth", {
  login: { validate: true },
  pass: { validate: true }
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withTodoList = __webpack_require__(44);

var _withTodoList2 = _interopRequireDefault(_withTodoList);

var _Textfield = __webpack_require__(14);

var _Textfield2 = _interopRequireDefault(_Textfield);

var _checklist = __webpack_require__(54);

var _checklist2 = _interopRequireDefault(_checklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
  var data = _ref.data,
      user = _ref.user,
      addTask = _ref.addTask,
      handlerChange = _ref.handlerChange,
      addChecklist = _ref.addChecklist,
      checklistChange = _ref.checklistChange,
      blureChek = _ref.blureChek,
      inputCheck = _ref.inputCheck,
      chekComplete = _ref.chekComplete,
      dragStart = _ref.dragStart,
      dragEnd = _ref.dragEnd,
      drop = _ref.drop,
      dropEnter = _ref.dropEnter,
      dropLeave = _ref.dropLeave,
      completeTask = _ref.completeTask,
      logout = _ref.logout,
      blureTask = _ref.blureTask;
  return _react2.default.createElement(
    "div",
    { className: "todo" },
    data.length === 0 ? _react2.default.createElement(
      "h3",
      { className: "todo__empty_message" },
      "Hi, ",
      user.name,
      ", ",
      _react2.default.createElement(
        "span",
        { onClick: addTask },
        "create your first task"
      )
    ) : _react2.default.createElement(
      "div",
      { className: "todo__container" },
      data.map(function (task) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          { key: task.id },
          _react2.default.createElement(
            "div",
            {
              className: "task",
              draggable: "true",
              onDragStart: dragStart,
              onDragEnd: dragEnd,
              name: "task-" + task.id
            },
            _react2.default.createElement(_Textfield2.default, {
              blureTask: blureTask,
              isTask: true,
              type: "textarea",
              name: task.id,
              placeholder: "What to do?",
              value: task.task || "",
              handlerChange: handlerChange
            }),
            _react2.default.createElement(_checklist2.default, {
              blureChek: blureChek,
              checklistChange: checklistChange,
              id: task.id,
              list: task.checklist || [],
              inputCheck: inputCheck,
              chekComplete: chekComplete,
              dragStart: dragStart,
              dragEnd: dragEnd,
              drop: drop,
              dropEnter: dropEnter,
              dropLeave: dropLeave
            }),
            _react2.default.createElement(
              "span",
              {
                onClick: function onClick() {
                  return addChecklist(task.id);
                },
                className: "task__checklist-add"
              },
              "Add a checklist element"
            ),
            _react2.default.createElement(
              "div",
              {
                onClick: function onClick() {
                  return completeTask(task.id);
                },
                className: "button white"
              },
              "Complete the task"
            ),
            task.complete ? _react2.default.createElement(
              "div",
              { className: "task__complete" },
              _react2.default.createElement(
                "h3",
                null,
                "\u2714"
              ),
              _react2.default.createElement(
                "span",
                { onClick: function onClick() {
                    return completeTask(task.id);
                  } },
                "To return to the task"
              )
            ) : ""
          ),
          _react2.default.createElement("div", {
            className: "drop-container-task",
            name: "task-" + task.id,
            onDragOver: function onDragOver(event) {
              return event.preventDefault();
            },
            onDrop: drop,
            onDragEnter: dropEnter,
            onDragLeave: dropLeave
          })
        );
      }),
      _react2.default.createElement(
        "div",
        { className: "next-task", onClick: addTask },
        "+"
      )
    ),
    _react2.default.createElement(
      "div",
      {
        className: "trash",
        name: "trash-trash",
        onDragOver: function onDragOver(event) {
          return event.preventDefault();
        },
        onDrop: drop,
        onDragEnter: dropEnter,
        onDragLeave: dropLeave
      },
      _react2.default.createElement(
        "h3",
        { name: "trash-trash" },
        "Trash"
      ),
      _react2.default.createElement(
        "span",
        { name: "trash-trash" },
        "Move here to delete"
      )
    ),
    _react2.default.createElement(
      "div",
      { onClick: logout, className: "button green logout" },
      "Log out"
    )
  );
};

exports.default = (0, _withTodoList2.default)(Todo);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _api = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withTodoList = function withTodoList(Component, api_prefix, validate) {
  var WithTodoList = function (_React$Component) {
    _inherits(WithTodoList, _React$Component);

    function WithTodoList(props) {
      _classCallCheck(this, WithTodoList);

      var _this = _possibleConstructorReturn(this, (WithTodoList.__proto__ || Object.getPrototypeOf(WithTodoList)).call(this, props));

      _this.state = {
        user: _this.props.user,
        drag: "",
        drop: "",
        dragtype: "",
        data: _this.props.data
      };
      _this.addTask = _this.addTask.bind(_this);
      _this.handlerChange = _this.handlerChange.bind(_this);
      _this.addChecklist = _this.addChecklist.bind(_this);
      _this.checklistChange = _this.checklistChange.bind(_this);
      _this.blureChek = _this.blureChek.bind(_this);
      _this.inputCheck = _this.inputCheck.bind(_this);
      _this.chekComplete = _this.chekComplete.bind(_this);
      _this.dragStart = _this.dragStart.bind(_this);
      _this.dragEnd = _this.dragEnd.bind(_this);
      _this.drop = _this.drop.bind(_this);
      _this.dropEnter = _this.dropEnter.bind(_this);
      _this.dropLeave = _this.dropLeave.bind(_this);
      _this.completeTask = _this.completeTask.bind(_this);
      _this.blureTask = _this.blureTask.bind(_this);
      return _this;
    }

    _createClass(WithTodoList, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
          this.setState({ data: nextProps.data });
        }
      }
    }, {
      key: "addTask",
      value: function addTask() {
        var data = this.props.data;

        data.push({ id: new Date().getTime() });
        this.props.callServer(data);
      }
    }, {
      key: "addChecklist",
      value: function addChecklist(id) {
        var data = this.props.data;

        var idx = data.findIndex(function (x) {
          return x.id.toString() === id.toString();
        });
        data[idx].checklist ? data[idx].checklist.push({ id: new Date().getTime() }) : data[idx].checklist = [{ id: new Date().getTime() }];

        this.props.callServer(data);
      }
    }, {
      key: "handlerChange",
      value: function handlerChange(id, value) {
        var data = this.state.data;

        var idx = data.findIndex(function (x) {
          return x.id.toString() === id.toString();
        });
        data[idx].task = value;
        this.setState({ data: data });
      }
    }, {
      key: "checklistChange",
      value: function checklistChange(name, value) {
        var data = this.state.data;

        var block_id = name.split("-")[0];
        var check_id = name.split("-")[1];
        var block_idx = data.findIndex(function (x) {
          return x.id.toString() === block_id.toString();
        });
        var check_idx = data[block_idx].checklist.findIndex(function (x) {
          return x.id.toString() === check_id.toString();
        });
        data[block_idx].checklist[check_idx].value = value;
        this.setState({ data: data });
      }
    }, {
      key: "blureTask",
      value: function blureTask(id) {
        var data = this.state.data;

        this.props.callServer(data);
      }
    }, {
      key: "blureChek",
      value: function blureChek(flag, name) {
        var data = this.state.data;

        var block_id = name.split("-")[0];
        var check_id = name.split("-")[1];
        var block_idx = data.findIndex(function (x) {
          return x.id.toString() === block_id.toString();
        });
        var check_idx = data[block_idx].checklist.findIndex(function (x) {
          return x.id.toString() === check_id.toString();
        });
        if (flag) {
          data[block_idx].checklist[check_idx].state = "text";
        } else {
          data[block_idx].checklist.splice(check_idx, 1);
        }

        this.props.callServer(data);
      }
    }, {
      key: "inputCheck",
      value: function inputCheck(block_id, check_id) {
        var data = this.props.data;

        var block_idx = data.findIndex(function (x) {
          return x.id.toString() === block_id.toString();
        });
        var check_idx = data[block_idx].checklist.findIndex(function (x) {
          return x.id.toString() === check_id.toString();
        });
        data[block_idx].checklist[check_idx].state = "input";
        this.props.callServer(data);
      }
    }, {
      key: "chekComplete",
      value: function chekComplete(block_id, check_id) {
        var data = this.props.data;

        var block_idx = data.findIndex(function (x) {
          return x.id.toString() === block_id.toString();
        });
        var check_idx = data[block_idx].checklist.findIndex(function (x) {
          return x.id.toString() === check_id.toString();
        });

        data[block_idx].checklist[check_idx].complete ? data[block_idx].checklist[check_idx].complete = false : data[block_idx].checklist[check_idx].complete = true;

        this.props.callServer(data);
      }
    }, {
      key: "completeTask",
      value: function completeTask(id) {
        var data = this.props.data;

        var idx = data.findIndex(function (x) {
          return x.id.toString() === id.toString();
        });
        if (data[idx].complete) {
          data[idx].complete = false;
        } else {
          data[idx].complete = true;
        }

        this.props.callServer(data);
      }
    }, {
      key: "dragStart",
      value: function dragStart(e) {
        e.dataTransfer.setData("text/html", e.target.id);
        var dragtype = e.target.attributes.name.value.split("-")[0];
        this.setState({ drag: e.target.attributes.name.value, dragtype: dragtype });
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        this.setState({ drag: "", dragtype: "" });
      }
    }, {
      key: "drop",
      value: function drop(e) {
        var data = this.props.data;

        if (e.target.attributes.name.value.split("-")[0] === this.state.dragtype && e.target.attributes.name.value !== this.state.drag) {
          if (this.state.dragtype === "element") {
            e.target.style.height = "10px";
            e.target.style.border = "none";
          } else {
            e.target.style.width = "30px";
            e.target.style.border = "none";
          }
          var drop = e.target.attributes.name.value;
          var drag = this.state.drag;


          if (this.state.dragtype === "element") {
            var dropKeys = {
              block_id: drop.split("-")[1],
              check_id: drop.split("-")[2]
            };
            var dragKeys = {
              block_id: drag.split("-")[1],
              check_id: drag.split("-")[2]
            };

            dropKeys.block_idx = data.findIndex(function (x) {
              return x.id.toString() === dropKeys.block_id.toString();
            });
            dropKeys.check_idx = data[dropKeys.block_idx].checklist.findIndex(function (x) {
              return x.id.toString() === dropKeys.check_id.toString();
            });
            dragKeys.block_idx = data.findIndex(function (x) {
              return x.id.toString() === dragKeys.block_id.toString();
            });
            dragKeys.check_idx = data[dragKeys.block_idx].checklist.findIndex(function (x) {
              return x.id.toString() === dragKeys.check_id.toString();
            });
            var tmp = data[dragKeys.block_idx].checklist[dragKeys.check_idx];
            data[dragKeys.block_idx].checklist.splice(dragKeys.check_idx, 1);
            data[dropKeys.block_idx].checklist.splice(dropKeys.check_idx, 0, tmp);
          } else {
            var _dropKeys = {
              block_id: drop.split("-")[1]
            };
            var _dragKeys = {
              block_id: drag.split("-")[1]
            };
            _dropKeys.block_idx = data.findIndex(function (x) {
              return x.id.toString() === _dropKeys.block_id.toString();
            });
            _dragKeys.block_idx = data.findIndex(function (x) {
              return x.id.toString() === _dragKeys.block_id.toString();
            });
            var _tmp = data[_dragKeys.block_idx];
            data.splice(_dragKeys.block_idx, 1);
            data.splice(_dropKeys.block_idx, 0, _tmp);
          }

          this.props.callServer(data);
        } else if (e.target.attributes.name.value.split("-")[0] === "trash") {
          e.target.style.backgroundColor = "#35ac19";
          e.target.style.boxShadow = "none";
          var _drag = this.state.drag;

          if (this.state.dragtype === "element") {
            var _dragKeys2 = {
              block_id: _drag.split("-")[1],
              check_id: _drag.split("-")[2]
            };

            _dragKeys2.block_idx = data.findIndex(function (x) {
              return x.id.toString() === _dragKeys2.block_id.toString();
            });
            _dragKeys2.check_idx = data[_dragKeys2.block_idx].checklist.findIndex(function (x) {
              return x.id.toString() === _dragKeys2.check_id.toString();
            });
            data[_dragKeys2.block_idx].checklist.splice(_dragKeys2.check_idx, 1);
          } else {
            var _dragKeys3 = {
              block_id: _drag.split("-")[1]
            };
            _dragKeys3.block_idx = data.findIndex(function (x) {
              return x.id.toString() === _dragKeys3.block_id.toString();
            });
            data.splice(_dragKeys3.block_idx, 1);
          }
          this.props.callServer(data);
        }
      }
    }, {
      key: "dropEnter",
      value: function dropEnter(e) {
        if (e.target.attributes.name.value.split("-")[0] === this.state.dragtype && e.target.attributes.name.value !== this.state.drag) {
          if (this.state.dragtype === "element") {
            e.target.style.height = "30px";
            e.target.style.border = "2px dashed #fff";
          } else {
            e.target.style.width = "360px";
            e.target.style.border = "2px dashed grey";
          }
        } else if (e.target.attributes.name.value.split("-")[0] === "trash") {
          e.target.style.backgroundColor = "#008329";
          e.target.style.boxShadow = "0 2px 10px 1px rgba(57, 73, 76, 0.4), 0 1px 2px rgba(57, 73, 76, 0.25)";
        }
      }
    }, {
      key: "dropLeave",
      value: function dropLeave(e) {
        if (e.target.attributes.name.value.split("-")[0] === this.state.dragtype && e.target.attributes.name.value !== this.state.drag) {
          if (this.state.dragtype === "element") {
            e.target.style.height = "10px";
            e.target.style.border = "none";
          } else {
            e.target.style.width = "30px";
            e.target.style.border = "none";
          }
        } else if (e.target.attributes.name.value.split("-")[0] === "trash") {
          e.target.style.backgroundColor = "#35ac19";
          e.target.style.boxShadow = "none";
        }
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, {
          handlerChange: this.handlerChange,
          addTask: this.addTask,
          addChecklist: this.addChecklist,
          checklistChange: this.checklistChange,
          blureChek: this.blureChek,
          inputCheck: this.inputCheck,
          chekComplete: this.chekComplete,
          dragStart: this.dragStart,
          dragEnd: this.dragEnd,
          drop: this.drop,
          dropEnter: this.dropEnter,
          dropLeave: this.dropLeave,
          completeTask: this.completeTask,
          data: this.state.data,
          blureTask: this.blureTask
        }));
      }
    }]);

    return WithTodoList;
  }(_react2.default.Component);

  WithTodoList.displayName = "WithTodoList(" + (Component.displayName || Component.name || "Component") + ")";
  return WithTodoList;
};

exports.default = withTodoList;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

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

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
  var err = _ref.err,
      close = _ref.close;
  return _react2.default.createElement(
    "div",
    { className: "error" },
    _react2.default.createElement(
      "div",
      { className: "error__container" },
      _react2.default.createElement(
        "p",
        null,
        err
      ),
      _react2.default.createElement(
        "span",
        { className: "button green", onClick: function onClick() {
            return close("");
          } },
        "Ok"
      )
    )
  );
};

exports.default = Error;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var TextareaAutosize_1 = __webpack_require__(49);
exports["default"] = TextareaAutosize_1.TextareaAutosize;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
exports.__esModule = true;
var React = __webpack_require__(0);
var PropTypes = __webpack_require__(50);
var autosize = __webpack_require__(51);
var _getLineHeight = __webpack_require__(52);
var getLineHeight = _getLineHeight;
var RESIZED = "autosize:resized";
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
var TextareaAutosizeClass = /** @class */function (_super) {
    __extends(TextareaAutosizeClass, _super);
    function TextareaAutosizeClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            lineHeight: null
        };
        _this.textarea = _this.props.innerRef || React.createRef();
        _this.onResize = function (e) {
            if (_this.props.onResize) {
                _this.props.onResize(e);
            }
        };
        _this.updateLineHeight = function () {
            if (_this.textarea.current) {
                _this.setState({
                    lineHeight: getLineHeight(_this.textarea.current)
                });
            }
        };
        _this.onChange = function (e) {
            var onChange = _this.props.onChange;
            _this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
        return _this;
    }
    TextareaAutosizeClass.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props,
            maxRows = _a.maxRows,
            async = _a.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () {
                return _this.textarea.current && autosize(_this.textarea.current);
            });
        } else {
            this.textarea.current && autosize(this.textarea.current);
        }
        if (this.textarea.current) {
            this.textarea.current.addEventListener(RESIZED, this.onResize);
        }
    };
    TextareaAutosizeClass.prototype.componentWillUnmount = function () {
        if (this.textarea.current) {
            this.textarea.current.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea.current);
        }
    };
    TextareaAutosizeClass.prototype.render = function () {
        var _a = this,
            _b = _a.props,
            onResize = _b.onResize,
            maxRows = _b.maxRows,
            onChange = _b.onChange,
            style = _b.style,
            innerRef = _b.innerRef,
            children = _b.children,
            props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]),
            lineHeight = _a.state.lineHeight;
        var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
        return React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: this.textarea }), children);
    };
    TextareaAutosizeClass.prototype.componentDidUpdate = function () {
        this.textarea.current && autosize.update(this.textarea.current);
    };
    TextareaAutosizeClass.defaultProps = {
        rows: 1,
        async: false
    };
    TextareaAutosizeClass.propTypes = {
        rows: PropTypes.number,
        maxRows: PropTypes.number,
        onResize: PropTypes.func,
        innerRef: PropTypes.object,
        async: PropTypes.bool
    };
    return TextareaAutosizeClass;
}(React.Component);
exports.TextareaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextareaAutosizeClass, __assign({}, props, { innerRef: ref }));
});

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.autosize = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load in dependencies
var computedStyle = __webpack_require__(53);

/**
 * Calculate the `line-height` of a given node
 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
 * @returns {Number} `line-height` of the element in pixels
 */
function lineHeight(node) {
  // Grab the line-height via style
  var lnHeightStr = computedStyle(node, 'line-height');
  var lnHeight = parseFloat(lnHeightStr, 10);

  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
  if (lnHeightStr === lnHeight + '') {
    // Save the old lineHeight style and update the em unit to the element
    var _lnHeightStyle = node.style.lineHeight;
    node.style.lineHeight = lnHeightStr + 'em';

    // Calculate the em based height
    lnHeightStr = computedStyle(node, 'line-height');
    lnHeight = parseFloat(lnHeightStr, 10);

    // Revert the lineHeight style
    if (_lnHeightStyle) {
      node.style.lineHeight = _lnHeightStyle;
    } else {
      delete node.style.lineHeight;
    }
  }

  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
  // DEV: `em` units are converted to `pt` in IE6
  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
  if (lnHeightStr.indexOf('pt') !== -1) {
    lnHeight *= 4;
    lnHeight /= 3;
    // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
  } else if (lnHeightStr.indexOf('mm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 25.4;
    // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
  } else if (lnHeightStr.indexOf('cm') !== -1) {
    lnHeight *= 96;
    lnHeight /= 2.54;
    // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
  } else if (lnHeightStr.indexOf('in') !== -1) {
    lnHeight *= 96;
    // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
  } else if (lnHeightStr.indexOf('pc') !== -1) {
    lnHeight *= 16;
  }

  // Continue our computation
  lnHeight = Math.round(lnHeight);

  // If the line-height is "normal", calculate by font-size
  if (lnHeightStr === 'normal') {
    // Create a temporary node
    var nodeName = node.nodeName;
    var _node = document.createElement(nodeName);
    _node.innerHTML = '&nbsp;';

    // If we have a text area, reset it to only 1 row
    // https://github.com/twolfson/line-height/issues/4
    if (nodeName.toUpperCase() === 'TEXTAREA') {
      _node.setAttribute('rows', '1');
    }

    // Set the font-size of the element
    var fontSizeStr = computedStyle(node, 'font-size');
    _node.style.fontSize = fontSizeStr;

    // Remove default padding/border which can affect offset height
    // https://github.com/twolfson/line-height/issues/4
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    _node.style.padding = '0px';
    _node.style.border = '0px';

    // Append it to the body
    var body = document.body;
    body.appendChild(_node);

    // Assume the line height of the element is the height
    var height = _node.offsetHeight;
    lnHeight = height;

    // Remove our child from the DOM
    body.removeChild(_node);
  }

  // Return the calculated height
  return lnHeight;
}

// Export lineHeight
module.exports = lineHeight;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This code has been refactored for 140 bytes
// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
var computedStyle = function computedStyle(el, prop, getComputedStyle) {
  getComputedStyle = window.getComputedStyle;

  // In one fell swoop
  return (
  // If we have getComputedStyle
  getComputedStyle ?
  // Query it
  // TODO: From CSS-Query notes, we might need (node, null) for FF
  getComputedStyle(el) :

  // Otherwise, we are in IE and use currentStyle
  el.currentStyle)[
  // Switch to camelCase for CSSOM
  // DEV: Grabbed from jQuery
  // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
  // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
  prop.replace(/-(\w)/gi, function (word, letter) {
    return letter.toUpperCase();
  })];
};

module.exports = computedStyle;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Textfield = __webpack_require__(14);

var _Textfield2 = _interopRequireDefault(_Textfield);

var _Checkbox = __webpack_require__(55);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checklist = function Checklist(_ref) {
  var list = _ref.list,
      id = _ref.id,
      checklistChange = _ref.checklistChange,
      blureChek = _ref.blureChek,
      inputCheck = _ref.inputCheck,
      chekComplete = _ref.chekComplete,
      dragStart = _ref.dragStart,
      dragEnd = _ref.dragEnd,
      drop = _ref.drop,
      dropEnter = _ref.dropEnter,
      dropLeave = _ref.dropLeave;
  return _react2.default.createElement(
    "div",
    { className: "task__checklist" },
    list.map(function (el, idx) {
      return _react2.default.createElement(
        _react2.default.Fragment,
        { key: el.id },
        _react2.default.createElement(
          "div",
          {
            className: "el",
            draggable: "true",
            onDragStart: dragStart,
            onDragEnd: dragEnd,
            name: "element-" + id + "-" + el.id
          },
          el.state && el.state === "text" ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
              "span",
              {
                onDoubleClick: function onDoubleClick() {
                  return inputCheck(id, el.id);
                },
                className: el.complete ? "check-text checked" : "check-text"
              },
              idx + 1,
              ". ",
              el.value || ""
            ),
            _react2.default.createElement(_Checkbox2.default, {
              isChecked: el.complete ? true : false,
              placeholder: "",
              handlerChange: function handlerChange() {
                return chekComplete(id, el.id);
              }
            })
          ) : _react2.default.createElement(_Textfield2.default, {
            type: "input",
            name: id + "-" + el.id,
            placeholder: idx + 1,
            value: el.value || "",
            handlerChange: checklistChange,
            isChecklist: true,
            blureChek: blureChek
          })
        ),
        _react2.default.createElement("div", {
          className: "drop-container-el",
          name: "element-" + id + "-" + el.id,
          onDragOver: function onDragOver(event) {
            return event.preventDefault();
          },
          onDrop: drop,
          onDragEnter: dropEnter,
          onDragLeave: dropLeave
        })
      );
    })
  );
};

exports.default = Checklist;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
  var isChecked = _ref.isChecked,
      placeholder = _ref.placeholder,
      handlerChange = _ref.handlerChange;
  return _react2.default.createElement(
    "div",
    {
      onClick: handlerChange,
      className: isChecked ? "checkbox checked" : "checkbox"
    },
    _react2.default.createElement("div", { className: "box" }),
    _react2.default.createElement(
      "span",
      null,
      placeholder
    )
  );
};

exports.default = Checkbox;

/***/ })
/******/ ]);