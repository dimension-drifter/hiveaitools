/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ // The require scope
  /******/ var __webpack_require__ = {};
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!*****************************************************************!*\
  !*** ./resources/js/components/frontend/alert-confirm-popup.js ***!
  \*****************************************************************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ AlertConfirm: () => /* binding */ AlertConfirm,
    /* harmony export */
  });
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return (
      (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                "function" == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            }),
      _typeof(obj)
    );
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var AlertConfirm = /*#__PURE__*/ (function () {
    function AlertConfirm() {
      _classCallCheck(this, AlertConfirm);
      this.popup = $(".alert-popup");
    }

    // danger method means like we're using danger icon in the popup
    // if it would be more than one icon, we'll add additional methods
    _createClass(AlertConfirm, [
      {
        key: "danger",
        value: function danger(header, description, confirmButtonValue) {
          var _this = this;
          return new Promise(function (resolve, reject) {
            // showing the confirm popup
            _this.popup.find("p").text(description);
            _this.popup.find("do-action").text(confirmButtonValue);
            _this.show();

            // return true if the user approve that action
            _this.popup.find(".do-action").on("click", function () {
              resolve(true);

              // hiding the confirm popup
              _this.hide();
            });

            // else no
            _this.popup.find(".cancel-btn").on("click", function () {
              resolve(false);

              // hiding the confirm popup
              _this.hide();
            });
            return; // important this is here!!!
          });
        },
      },
      {
        key: "show",
        value: function show() {
          this.popup.removeClass("d-none");
        },
      },
      {
        key: "hide",
        value: function hide() {
          this.popup.addClass("d-none");
        },
      },
    ]);
    return AlertConfirm;
  })();
  /******/
})();
