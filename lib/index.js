'use strict';

exports.__esModule = true;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _prettyData = require('pretty-data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _class);

    var def = {
      filter: new RegExp('\.(wxml|xml|json)$'),
      config: {}
    };

    this.setting = Object.assign({}, def, c);
  }

  _class.prototype.apply = function apply(op) {

    var setting = this.setting;

    if (!setting.filter.test(op.file)) {
      op.next();
    } else {
      op.output && op.output({
        action: '压缩',
        file: op.file
      });

      if (/\.(wxml|xml)$/.test(op.file)) {
        op.code = _prettyData.pd.xmlmin(op.code||'');
      } else if (/\.json$/.test(op.file)) {
        op.code = _prettyData.pd.jsonmin(op.code||'');
      }
      op.next();
    }
  };

  return _class;
}();

exports.default = _class;
