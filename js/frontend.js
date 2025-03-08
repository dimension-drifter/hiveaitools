/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!*************************************************************!*\
  !*** ./resources/js/components/frontend/frontend.helper.js ***!
  \*************************************************************/
  $(document).ready(function () {
    $.fn.serializeControls = function () {
      var data = {};
      function buildInputObject(arr, val) {
        if (arr.length < 1) return val;
        var objKey = arr[0];
        if (objKey.slice(-1) == "]") {
          objKey = objKey.slice(0, -1);
        }
        var result = {};
        if (arr.length == 1) {
          result[objKey] = val;
        } else {
          arr.shift();
          // nested value
          result[objKey] = buildInputObject(arr, val);
        }
        return result;
      }
      var serializedData = this.serializeArray();
      $(this).each(function () {
        if (this.getAttribute("type") === "checkbox") {
          serializedData.push({
            name: this.name,
            value: this.checked,
          });
        }
      });
      $.each(serializedData, function () {
        var val = this.value;
        var c = this.name.split("[");
        var a = buildInputObject(c, val);
        $.extend(true, data, a);
      });
      return data;
    };
  });
  /******/
})();
